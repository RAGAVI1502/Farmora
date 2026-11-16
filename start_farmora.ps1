# FARMORA – PowerShell Launcher
Write-Host "=====================================================================" -ForegroundColor Green
Write-Host "  FARMORA - Smart Agriculture & Farmer Empowerment Platform" -ForegroundColor Yellow
Write-Host "  College AgriTech Hackathon Showcase 2026" -ForegroundColor Cyan
Write-Host "=====================================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Starting web server on http://localhost:3000..." -ForegroundColor White

Start-Process "http://localhost:3000"
& "C:\Program Files (x86)\Python314-32\python.exe" -m http.server 3000
