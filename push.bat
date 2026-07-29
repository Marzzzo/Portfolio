@echo off
title Git Push Script

echo.
echo ==========================
echo      Git Push Script
echo ==========================
echo.

git add .

git diff --cached --quiet
if %errorlevel%==0 (
    echo Keine Aenderungen zum Committen.
    pause
    exit
)

set /p msg=Commit-Nachricht: 

if "%msg%"=="" (
    echo Commit abgebrochen.
    pause
    exit
)

git commit -m "%msg%"

if errorlevel 1 (
    echo.
    echo Commit fehlgeschlagen.
    pause
    exit
)

git push

if errorlevel 1 (
    echo.
    echo Push fehlgeschlagen.
    pause
    exit
)

echo.
echo ==========================
echo   Push erfolgreich!
echo ==========================
pause