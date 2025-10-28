from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import qrcode
import io
import base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/generate_qr")
def generate_qr(
    upi_id: str = Query(..., description="Your UPI ID"),
    name: str = Query("", description="Name of receiver"),
    amount: str = Query("", description="Amount"),
    note: str = Query("", description="Transaction note"),
):
    upi_link = f"upi://pay?pa={upi_id}"
    if name:
        upi_link += f"&pn={name}"
    if amount:
        upi_link += f"&am={amount}"
    if note:
        upi_link += f"&tn={note}"
    upi_link += "&cu=INR"

    # Generate QR
    qr = qrcode.make(upi_link)
    buffer = io.BytesIO()
    qr.save(buffer, format="PNG")
    img_str = base64.b64encode(buffer.getvalue()).decode()

    return JSONResponse({"upi_link": upi_link, "qr_base64": img_str})
