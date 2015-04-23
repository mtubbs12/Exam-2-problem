function CreateCategory()

{
    var objRequest=new XMLHttpRequest();
    var url="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory";
    
    //Collect New Category data from web page
    var categoryname=document.getElementById("catname").value;
    var categorydescription=document.getElementById("catdescription").value;
    
    //Create the parameter string
    var newcategory='{"CName":"' + categoryname + '","CDescription":"' + categorydescription+ '"}';
    
    //Checking for AJAx operation return
    objRequest.onreadystatechange=function()
    {
        if (objRequest.readyState ==4 && objRequest.status==200)
        {
            var result=JSON.parse(objRequest.responseText);
            OperationResult1(result);
        }
    }
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newcategory);
}

//Show in result1 area if the function was successful or not successful
function OperationResult1(output)
{
    if (output.WasSuccessful== 1)
    {
        document.getElementById("result1").innerHTML="The operation was successful!"
    }
    else
    {
        document.getElementById("result1").innerHTML="The operation was not successful!"+"<br>"+output.Exception;
    }
}
//Show or hide the areas depending on which one you select from the dropdown menu
function MenuChoice()
{
    if (document.getElementById("menu").value == "Create A Category")
    {
        document.getElementById("area1").style.visibility = "visible";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "hidden";
        document.getElementById("area4").style.visibility = "hidden";
        document.getElementById("area5").style.visibility = "hidden";
    }
    else if(document.getElementById("menu").value == "Update Category Description")
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "visible";
        document.getElementById("area3").style.visibility = "hidden";
        document.getElementById("area4").style.visibility = "hidden";
        document.getElementById("area5").style.visibility = "hidden";
    }
    else if(document.getElementById("menu").value == "Delete Category")
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "visible";
        document.getElementById("area4").style.visibility = "hidden";
        document.getElementById("area5").style.visibility = "hidden";
    }
    else if(document.getElementById("menu").value == "Display Category List")
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "hidden";
        document.getElementById("area4").style.visibility = "visible";
        document.getElementById("area5").style.visibility = "hidden";
    }
    else if(document.getElementById("menu").value == "Information about the Creator")
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "hidden";
        document.getElementById("area4").style.visibility = "hidden";
        document.getElementById("area5").style.visibility = "visible";
    }
}
function updateCatDescription()
{
    var objRequest=new XMLHttpRequest();
    var url="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    
    //Collect New updated shipping info from section 2 of webpage
    var newcategorydescription=document.getElementById("newcatdescription").value;   
    var newcategoryid=document.getElementById("newcatid").value;
    //Create the parameter string
    var newdescription='{"CID":"' + newcategoryid + '","CDescription":"' + newcategorydescription+ '"}';
    
   //Checking for AJAx operation return
    objRequest.onreadystatechange=function()
    {
        if (objRequest.readyState == 4 && objRequest.status==200)
        {
            var result=JSON.parse(objRequest.responseText);
            Catresult(result);
        }
    }
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newdescription);
}


function Catresult(output)
{
    if (output.WasSuccessful== 1)
    {
        document.getElementById("result2").innerHTML="The Category Description has been updated!"
    }
    else
    {
        document.getElementById("result2").innerHTML="The Category failed to update!"+"<br>"+output.Exception;
    }
}
function deleteCategory()
{
    var x;
    if (confirm("Are you sure you want to delete the category?") == true)
    {
        x = "Category has been deleted!";
    }
    else
    {
        x = "Category has not been deleted!";
    }
    document.getElementById("result3").innerHTML = x;
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory";
    url += document.getElementById("catdelete").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateResult(output);
        }
    }
    
    objRequest.open("GET", url, true);
    objRequest.send();
    
}

function GenerateResult (result)
{
    if (output.WasSuccessful== 1)
    {
        document.getElementById("result3").innerHTML="Category has been deleted!"
    }
    else
    {
        document.getElementById("result3").innerHTML="Category has not been deleted!"+"<br>"+output.Exception;
    }
}

function getAllCategories()
{
    var listOfObjects = [];
var a = ["CategoryID", "CategoryName", "CategoryDescription"];
a.forEach(function(entry) {
    var singleObj = {}
    singleObj['type'] = 'Category';
    singleObj['value'] = entry;
    listOfObjects.push(singleObj);
});

console.log(listOfObjects);
}