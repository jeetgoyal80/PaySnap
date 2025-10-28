import os
import io
import base64
import qrcode
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn

app = FastAPI(title="PaySnap QR Generator API")

# ✅ Allow all origins (you can restrict later to your frontend domain)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ Use specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "✅ PaySnap API is running successfully!"}


@app.get("/generate_qr")
def generate_qr(
    upi_id: str = Query(..., description="Your UPI ID"),
    name: str = Query("", description="Name of receiver"),
    amount: str = Query("", description="Amount"),
    note: str = Query("", description="Transaction note"),
):
    """
    Generates a UPI QR code as base64 and returns the UPI link.
    """
    # Construct UPI link
    upi_link = f"upi://pay?pa={upi_id}"
    if name:
        upi_link += f"&pn={name}"
    if amount:
        upi_link += f"&am={amount}"
    if note:
        upi_link += f"&tn={note}"
    upi_link += "&cu=INR"

    # Generate QR Code
    qr = qrcode.make(upi_link)
    buffer = io.BytesIO()
    qr.save(buffer, format="PNG")
    img_str = base64.b64encode(buffer.getvalue()).decode()

    return JSONResponse({"upi_link": upi_link, "qr_base64": img_str})


# ✅ Important for Render/Docker deployment
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))  # use Render's assigned port
    uvicorn.run("main:app", host="0.0.0.0", port=port)
