window.onload = function() {
    var vizDiv = document.getElementById("viz");
    var vizURL = 'https://public.tableau.com/views/Presents/TreeMap';
    var options = {
        width: '600px',
        height: '500px',
        hideToolbar: true,
        hideTabs: true,
        onFirstInteractive: function(){
            // alert('Viz is Interactive!');
            workbook = viz.getWorkbook();
            document.getElementById("sheetName").innerHTML = workbook.getActiveSheet().getName();
        }
        
    };
    viz = new tableau.Viz(vizDiv, vizURL, options);
    // viz.addEventListener('marksselection', function(){
    //     alert('Marks have been selected');
    // });
    viz.addEventListener('tabswitch', function(event){
        document.getElementById("sheetName").innerHTML = event.getNewSheetName();
    });
    var years = document.getElementById("yearSelect");
    
    for (var i = 1985; i <= 2011; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.innerHTML =  i;
        years.options.add(option);
    }
};

function switchView(sheetName){
    // workbook = viz.getWorkbook();
    workbook.activateSheetAsync(sheetName);
};

function showOnly(filterName, values){
    sheet = viz.getWorkbook().getActiveSheet();
    if(sheet.getSheetType() === 'worksheet'){
        // Only show me the values that I am asking Tableau to Show
        sheet.applyFilterAsync(filterName, values, 'REPLACE');
    } else {
        worksheetArray = sheet.getWorksheets();
        for(i=0; i<worksheetArray.length; i++){
            worksheetArray[i].applyFilterAsync(filterName, values, 'REPLACE');
        }
    }
    
};

function alsoShow(filterName, values){
    sheet = viz.getWorkbook().getActiveSheet();
    if(sheet.getSheetType() === 'worksheet'){
        // Select the value in addition to the already selected values
        sheet.applyFilterAsync(filterName, values, 'ADD');
    } else {
        worksheetArray = sheet.getWorksheets();
        for(i=0; i<worksheetArray.length; i++){
            worksheetArray[i].applyFilterAsync(filterName, values, 'ADD');
        }
    }    
};

function dontShow(filterName, values){
    sheet = viz.getWorkbook().getActiveSheet();
    if(sheet.getSheetType() === 'worksheet'){
        // Remove the value from the values already selected
        sheet.applyFilterAsync(filterName, values, 'REMOVE');
    } else {
        worksheetArray = sheet.getWorksheets();
        for(i=0; i<worksheetArray.length; i++){
            worksheetArray[i].applyFilterAsync(filterName, values, 'REMOVE');
        }
    }    
};

function clearFilter(filterName){
    sheet = viz.getWorkbook().getActiveSheet();
    if(sheet.getSheetType() === 'worksheet'){
        // Clear Filter
        sheet.clearFilterAsync(filterName);
    } else {
        worksheetArray = sheet.getWorksheets();
        for(i=0; i<worksheetArray.length; i++){
            worksheetArray[i].clearFilterAsync(filterName);
        }
    }    
};

function selectMarks(filterName, values){
    sheet = viz.getWorkbook().getActiveSheet();
    if(sheet.getSheetType() === 'worksheet'){
        // Select Marks
        sheet.selectMarksAsync(filterName, values, 'REPLACE');
    } else {
        worksheetArray = sheet.getWorksheets();
        for(i=0; i<worksheetArray.length; i++){
            worksheetArray[i].selectMarksAsync(filterName, values, 'REPLACE');
        }
    }    
};

//clearSelectedMarksAsync()

function problemExample(){
    workbook = viz.getWorkbook();
    workbook.activateSheetAsync('LineChart');
    sheet = workbook.getActiveSheet();
    sheet.applyFilterAsync('Category','Stuffed Animal','REPLACE');

};

function solution(){
    // workbook = viz.getWorkbook();
    workbook.activateSheetAsync('LineChart').then(function(){
        sheet = workbook.getActiveSheet();
        // throw new Error('Ooooops');
        sheet.applyFilterAsync('Category','Stuffed Animal','REPLACE');
    }).then(function(){
        sheet = workbook.getActiveSheet();
        sheet.applyFilterAsync('Category','Gift Certificates','ADD');
        }, function(err){
            alert("It didn't work! " + err + " was thrown");
        });
    // .then(success, error)
    // .then(success).otherwise(error).always(callAlways)
};

function alertFunc(){
    alert('Marks have been selected!');
};

var listenerOn = false;

function toggleSelectionAlert(){
    if(listenerOn){
        listenerOn=false;
        viz.removeEventListener('marksselection', alertFunc);
    }else{
        listenerOn=true;
        viz.addEventListener('marksselection', alertFunc);
    }
};

function showRange(filter, minVal, maxVal){
    sheet = workbook.getActiveSheet();
    sheet.applyRangeFilterAsync(filter,{
        min: minVal,
        max: maxVal//,
        //nullOption: "nullValues" //"nonNullValues" / "allValues"
    })
};

function showDateRange(filter, minDate, maxDate){
    sheet = workbook.getActiveSheet();
    sheet.applyRangeFilterAsync(filter, {
        min: new Date(minDate),
        max: new Date(maxDate)
        // isExcludeMode: true
    });
};

function showLastNYears(filter, years, anchor){
    sheet = workbook.getActiveSheet();
    var dateObj;
    if(anchor){
        dateObj = new Date(anchor);
    }else{
        dateObj = new Date();
    }
    sheet.applyRelativeDateFilterAsync(filter,{
        periodType: 'year',
        rangeType: 'lastn',
        rangeN: years,
        anchorDate: dateObj
    });
};

function showHide(){
    if (viz.getIsHidden()){
        viz.show();
    }else{
        viz.hide();
    }
}

function exportPDF(){
    viz.showExportPDFDialog();
    // viz.showExportImageDialog();
    // viz.showDownloadWorkbookDialog();
    // viz.showExportDataDialog();
    // viz.showExportCrosstabDialog();
    // viz.showShareDialog();
};

function resize(width, height){
    viz.setFrameSize(width, height);
};

// viz.toggleAutomaticUpdatesAsync();

function dispose(){
    viz.dispose();
};
