param(
    [string]$PublishFolder = "publish",
    [string]$SourceFolder = "dist"
)

Write-Host "Preparing publish folder '$PublishFolder' from '$SourceFolder'..."

if (-Not (Test-Path $SourceFolder)) {
    Write-Error "Source folder '$SourceFolder' does not exist. Run your build first."
    exit 1
}

# Remove existing publish folder if present
if (Test-Path $PublishFolder) {
    Write-Host "Removing existing folder '$PublishFolder'..."
    Remove-Item -Recurse -Force $PublishFolder
}

Write-Host "Copying files..."
robocopy $SourceFolder $PublishFolder /MIR | Out-Null

Set-Location $PublishFolder

if (-Not (Test-Path .git)) {
    Write-Host "Initializing git repository in '$PublishFolder'..."
    git init
    git add -A
    git commit -m "Initial commit ready for GitHub"
    Write-Host "Git repo initialized and initial commit created."
} else {
    Write-Host "Git repository already exists in '$PublishFolder'."
}

Write-Host "Done. To push to GitHub run:
cd $PublishFolder
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main"
