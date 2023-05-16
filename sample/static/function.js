const handleAlerts = (type, msg) =>{
    alertBox.innerHTM = `
            <div class="alert alert-${type}" role="alert">
                ${msg}
            </div>
    
    `
}