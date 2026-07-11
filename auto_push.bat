@echo off
cd "C:\Users\Samukk99\Documents\Claude Code Projetos\Americano_01"
git add .
git commit -m "Atualizacao automatica — %date% %time%"
git push origin main
echo.
echo ================================
echo  Push concluido com sucesso!
echo ================================
pause
