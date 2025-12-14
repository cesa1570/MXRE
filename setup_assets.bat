@echo off
echo Setting up assets...

if not exist "src\assets\images" (
    echo Creating directory src\assets\images...
    mkdir "src\assets\images"
)

echo Copying files...
copy "C:\Users\ASUS\.gemini\antigravity\brain\90cfeaad-f7dc-4e5d-af90-d920b1cb2aeb\logo_mxre_1765722362715.png" "src\assets\images\logo.png"
copy "C:\Users\ASUS\.gemini\antigravity\brain\90cfeaad-f7dc-4e5d-af90-d920b1cb2aeb\hero_background_1765722386939.png" "src\assets\images\hero_background.png"
copy "C:\Users\ASUS\.gemini\antigravity\brain\90cfeaad-f7dc-4e5d-af90-d920b1cb2aeb\product_hoodie_1765722599279.png" "src\assets\images\product_hoodie.png"
copy "C:\Users\ASUS\.gemini\antigravity\brain\90cfeaad-f7dc-4e5d-af90-d920b1cb2aeb\product_tshirt_1765722615730.png" "src\assets\images\product_tshirt.png"
copy "C:\Users\ASUS\.gemini\antigravity\brain\90cfeaad-f7dc-4e5d-af90-d920b1cb2aeb\product_pants_1765722636524.png" "src\assets\images\product_pants.png"

echo Done.
dir "src\assets\images"
