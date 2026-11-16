@echo off
title FARMORA – Smart Agriculture & Farmer Empowerment Platform
echo =====================================================================
echo   FARMORA - Smart Agriculture & Farmer Empowerment Platform
echo   National AgriTech Innovation & Hackathon Showcase 2026
echo =====================================================================
echo.
echo Starting local web server on port 3000...
echo Opening Farmora in your default web browser...
echo.

start "" "http://localhost:3000"

"C:\Program Files (x86)\Python314-32\python.exe" -m http.server 3000

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Python server terminated. Opening index.html directly...
    start "" index.html
)
pause
