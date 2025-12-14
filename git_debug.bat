@echo off
echo ==================== > git_debug_log.txt
echo GIT STATUS: >> git_debug_log.txt
git status >> git_debug_log.txt 2>&1
echo ==================== >> git_debug_log.txt
echo GIT REMOTE: >> git_debug_log.txt
git remote -v >> git_debug_log.txt 2>&1
echo ==================== >> git_debug_log.txt
echo GIT LOG: >> git_debug_log.txt
git log -n 2 >> git_debug_log.txt 2>&1
echo ==================== >> git_debug_log.txt
echo ATTEMPTING ADD/COMMIT/PUSH: >> git_debug_log.txt
git add . >> git_debug_log.txt 2>&1
git commit -m "Fix: Force push landing page code" >> git_debug_log.txt 2>&1
git branch -M main >> git_debug_log.txt 2>&1
git push -u origin main --force >> git_debug_log.txt 2>&1
echo Done. >> git_debug_log.txt
