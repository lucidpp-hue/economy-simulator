import subprocess
import os

frontend_dir = "/vercel/share/v0-project/services/2016-roblox-main"
print(f"Installing dependencies in: {frontend_dir}")
result = subprocess.run(
    ["npm", "install"],
    cwd=frontend_dir,
    capture_output=True,
    text=True,
    timeout=180
)
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
print("Return code:", result.returncode)
