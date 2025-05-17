$files = Get-ChildItem -Path "src" -Recurse -Include "*.jsx" | Where-Object { $_.FullName -notlike "*\canvas\*" }

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Remove import statement
    $newContent = $content -replace "import \{ StarsCanvas \} from [^;]+;", ""
    
    # Remove StarsCanvas component
    $newContent = $newContent -replace "<StarsCanvas\s*/>", ""
    
    # Write the modified content back to the file
    if ($newContent -ne $content) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "Finished removing StarsCanvas from all files."
