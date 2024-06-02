var plugin = {
    metadataVersion: "1.0.0",
    id: "updateRemover",
    name: "Apache Camel Update Message Remover",
    version: "1.0.ß",
    author: "Kangoolutions GmbH",
    email: "cpihelper@kangoolutions.com",
    website: "https://github.com/dbeck121/CPI-Helper-Chrome-Extension",//"https://yourwebsite.com"
    description: "Removes the very annoying Apache Camel Update Message from the editor.",
    settings: {
    },
    heartbeat:  async (pluginHelper, settings) => {
        console.log("Apache Camel Update Message Remover is running");
        const dialogText = "Apache Camel 3.14 runtime will soon replace the existing 2.24 version.";
        const dialogs = document.querySelectorAll('div[role="dialog"]');
        dialogs.forEach(dialog => {
            if (dialog.textContent.startsWith(dialogText)) {
                dialog.remove();
            }
        });
    }
   
};

pluginList.push(plugin);