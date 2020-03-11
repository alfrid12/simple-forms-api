require('./DatabaseService').deleteAllForms((error, result) => {
    if (error) console.log(error);
    else console.log("\n\nSuccessfully deleted forms collection\n\n");
});