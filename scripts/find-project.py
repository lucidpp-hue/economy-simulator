import subprocess
import os

# Find the project
result = subprocess.run(
    ["find", "/", "-name", "package-lock.json", "-path", "*/2016-roblox*", "-maxdepth", "10"],
    capture_output=True, text=True, timeout=30
)
print("Find result:", result.stdout)
print("Find stderr:", result.stderr[:500])
