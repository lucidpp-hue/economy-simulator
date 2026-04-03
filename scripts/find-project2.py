import subprocess
import os

# Search broader
result = subprocess.run(
    ["find", "/", "-name", "economy-simulator", "-maxdepth", "8", "-type", "d"],
    capture_output=True, text=True, timeout=30
)
print("Find economy-simulator:", result.stdout)

result2 = subprocess.run(
    ["find", "/", "-name", "next.config.js", "-maxdepth", "10"],
    capture_output=True, text=True, timeout=30
)
print("Find next.config.js:", result2.stdout)

# Also try /var, /srv, /opt
for p in ["/var", "/srv", "/opt", "/tmp", "/mnt"]:
    if os.path.exists(p):
        print(f"\nContents of {p}:", os.listdir(p))
