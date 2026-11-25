
from fastapi import FastAPI

app = FastAPI(
    title="SupplierHub API",
    description="Backend for our business management system",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "SupplierHub is running!",
        "status": "success"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}
