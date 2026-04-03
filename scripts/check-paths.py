import subprocess
import os

print("CWD:", os.getcwd())
print("Files in cwd:", os.listdir("."))

# Try to find the right path
for base in ["/vercel/share/v0-project", "/home", "/root", "/app", os.getcwd()]:
    if os.path.exists(base):
        print(f"\nContents of {base}:", os.listdir(base))
