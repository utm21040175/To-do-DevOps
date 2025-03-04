# Autenticación
$tenantId = "b27fa871-a198-40b6-a567-cad638c4e76b"
$clientId = "4c135c30-3220-447a-adf8-c1f777521c92"
$clientSecret = "6d3e6510-6d85-4a60-b7ad-797de67e6696"
$resource = "https://analysis.windows.net/powerbi/api"
$authority = "https://login.microsoftonline.com/$tenantId"
$authContext = [Microsoft.IdentityModel.Clients.ActiveDirectory.AuthenticationContext]::new($authority)
$clientCredential = [Microsoft.IdentityModel.Clients.ActiveDirectory.ClientCredential]::new($clientId, $clientSecret)
$authResult = $authContext.AcquireTokenAsync($resource, $clientCredential).Result
$token = $authResult.AccessToken

# Parámetros del informe
$groupId = "me"
$reportName = "to-do-devops"
$filePath = "/reports/to-do-DevOps.pbix"

# Subir el informe
$publishUrl = "https://api.powerbi.com/v1.0/myorg/groups/$groupId/imports?datasetDisplayName=$reportName"
$headers = @{
    Authorization = "Bearer $token"
    ContentType = "multipart/form-data"
}

Invoke-RestMethod -Uri $publishUrl -Method Post -Headers $headers -InFile $filePath -ContentType "multipart/form-data"
