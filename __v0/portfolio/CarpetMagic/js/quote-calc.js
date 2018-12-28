$(document).ready(function () {
    var regCleaning = 0;
    var premCleaning = 0;
    var sofaQ = 0;
    var loveSeatQ = 0;
    var sectionalQ = 0;
    var ezQ = 0;
    var reclinerQ = 0;
    var ottoQ = 0;
    var diningQ = 0;
    var diningBQ = 0;
    var airductQ = 0;
    var airventQ = 0;
    var tileQ = 0;
    
    var total = 0;
    var rooms = 0;
    
    var minRegRoomsMet = true;
    var minPremRoomsMet = true;
    var minVentsMet = true;
    var negative = false;

    var minRegMsg = "The minimum number of rooms for regular cleaning is 3.";
    var minPremMsg = "The minimum number of rooms for premium cleaning is 3.";
    var minVentsMsg = "The minimum number of vents is 5.";
    var negMsg = "Please only enter positive numbers.";
    
    $minText = $('#minimum-text');
    
    $carpet_checkbox = $('#c1');
    $upholstery_checkbox = $('#c2');
    $other_checkbox = $('#c3');

    $carpet_container = $('#carpet-container');
    $upholstery_container = $('#upholstery-container');
    $other_container = $('#other-container');

    $carpet_checkbox.change(function(){
        if($carpet_checkbox.prop('checked')){
            $carpet_container.fadeIn();
        }else{
            $carpet_container.fadeOut(100);
        }
    });

    $upholstery_checkbox.change(function(){
        if($upholstery_checkbox.prop('checked')){
            $upholstery_container.fadeIn();
        }else{
            $upholstery_container.fadeOut(100);
        }
    });

    $other_checkbox.change(function(){
        if($other_checkbox.prop("checked")){
            $other_container.fadeIn();
        }else{
            $other_container.fadeOut(100);
        }
    });

    $("#reg-cleaning").change(function() {
        calculateRegClean();
    });
    $("#reg-cleaning").keyup(function() {
        calculateRegClean();
    });

    $("#reg-cleaning-stair").change(function() {
        calculateRegClean();
    });
    $("#reg-cleaning-stair").keyup(function() {
        calculateRegClean();
    });


    $("#prem-cleaning").change(function() {
        calulatePremClean();
    });
    $("#prem-cleaning").keyup(function() {
        calulatePremClean();
    });

    $("#prem-cleaning-stair").change(function() {
        calulatePremClean();
    });
    $("#prem-cleaning-stair").keyup(function() {
        calulatePremClean();
    });

    $("#sofa-q").change(function() {
        calculateSofa();
    });
    $("#sofa-q").keyup(function() {
        calculateSofa();
    });
    function calculateSofa(){
        if($("#sofa-q").val() == ''){
//            $("#sofa-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#sofa-q").val());
        }
        total = total - sofaQ;
        sofaQ = 0;
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            sofaQ = rooms * 69.95;
            total = total + sofaQ;
            negative = false;
        }
        updateTotal();
    }
    $("#loveseat-q").change(function() {
        calculateLoveseat();
    });
    $("#loveseat-q").keyup(function() {
        calculateLoveseat();
    });
    function calculateLoveseat(){
        if($("#loveseat-q").val() == ''){
//            $("#loveseat-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#loveseat-q").val());
        }
        total = total - loveSeatQ;
        loveSeatQ = 0;
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            loveSeatQ = rooms * 49.95;
            total = total + loveSeatQ;
            negative = false;
        }
        updateTotal();
    }
    $("#sectional-q").change(function() {
        calculateSectional();
    });
    $("#sectional-q").keyup(function() {
        calculateSectional();
    });
    function calculateSectional(){
        if($("#sectional-q").val() == ''){
//            $("#sectional-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#sectional-q").val());
        }
        total = total - sectionalQ;
        sectionalQ = 0;
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            sectionalQ = rooms * 129.95;
            total = total + sectionalQ;
            negative = false;
        }
        updateTotal();
    }
    $("#ez-q").change(function() {
        calculateEz();
    });
    $("#ez-q").keyup(function() {
        calculateEz();
    });
    function calculateEz(){
        if($("#ez-q").val() == ''){
//            $("#ez-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#ez-q").val());
        }
        total = total - ezQ;
        ezQ = 0;
        if(rooms < 0){
            negative = true;negative = true;
        } else if(rooms >= 0) {
            ezQ = rooms * 29.95;
            total = total + ezQ;
            negative = false;
        }
        updateTotal();
    }
    $("#recliner-q").change(function() {
        calculateRecliner();
    });
    $("#recliner-q").keyup(function() {
        calculateRecliner();
    });
    function calculateRecliner(){
        if($("#recliner-q").val() == ''){
//            $("#recliner-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#recliner-q").val());
        }
        total = total - reclinerQ;
        reclinerQ = 0;
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            reclinerQ = rooms * 39.95;
            total = total + reclinerQ;
            negative = false;
        }
        updateTotal();
    }
    $("#otto-q").change(function() {
        calculateOtto();
    });
    $("#otto-q").keyup(function() {
        calculateOtto();
    });
    function calculateOtto(){
        if($("#otto-q").val() == ''){
//            $("#otto-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#otto-q").val());
        }
        total = total - ottoQ;
        ottoQ = 0;
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            ottoQ = rooms * 24.95;
            total = total + ottoQ;
            negative = false;
        }
        updateTotal();
    }
    $("#dining-q").change(function() {
        calculateDiningq();
    });
    $("#dining-q").keyup(function() {
        calculateDiningq();
    });
    function calculateDiningq(){
        if($("#dining-q").val() == ''){
//            $("#dining-q").val('0');
            rooms = 0;
        }else {
            rooms = parseFloat($("#dining-q").val());
        }
        total = total - diningQ;
        diningQ = 0;
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            diningQ = rooms * 10;
            total = total + diningQ;
            negative = false;
        }
        updateTotal();
    }
    $("#dining-b-q").change(function() {
        calculateDiningbq();
    });
    $("#dining-b-q").keyup(function() {
        calculateDiningbq();
    });
    function calculateDiningbq(){
        if($("#dining-b-q").val() == ''){
//            $("#dining-b-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#dining-b-q").val());
        }
        total = total - diningBQ;
        diningBQ = 0;
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            diningBQ = rooms * 14;
            total = total + diningBQ;
            negative = false;
        }
        updateTotal();
    }
    $("#airduct-q").change(function() {
        calculateAirduct();
    });
    $("#airduct-q").keyup(function() {
        calculateAirduct();
    });
    function calculateAirduct(){
        if($("#airduct-q").val() == ''){
//            $("#airduct-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#airduct-q").val());    
        }
        total = total - airductQ;
        airductQ = 0;
        
        if(rooms == 0){
            minVentsMet = true;       
        }
        else if(rooms < 0){
            minVentsMet = false;
        } else {
            if(rooms < 5){
                minVentsMet = false;
            } else {
                minVentsMet = true;
                $(".minimum-text").hide();
                total = total - airductQ;
        
                airductQ = rooms * 25;
                total = total + airductQ;
            }
        }
        updateTotal();
    }
    $("#airvent-q").change(function() {
        calculateAirvent();
    });
    $("#airvent-q").keyup(function() {
        calculateAirvent();
    });
    function calculateAirvent(){
        if($("#airvent-q").val() == ''){
//            $("#airvent-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#airvent-q").val());
        }
        total = total - airventQ;
        airventQ = 0;
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            airventQ = rooms * 65;
            total = total + airventQ;
            negative = false;
        }
        updateTotal();
    }
    $("#tile-q").change(function() {
        calculateTile();
    });
    $("#tile-q").keyup(function() {
        calculateTile();
    });
    function calculateTile(){
        if($("#tile-q").val() == ''){
//            $("#tile-q").val('0');
            rooms = 0;
        } else {
            rooms = parseFloat($("#tile-q").val());
        }
        total = total - tileQ;
        tileQ = 0;
        
        if(rooms < 0){
            negative = true;
        } else if(rooms >= 0) {
            tileQ = rooms * 0.45;
            total = total + tileQ;
            negative = false;
        }
        updateTotal();
    }
    function calculateRegClean(){
        var regRooms = 0;
        var regStairs = 0;
        if($("#reg-cleaning").val() == ''){
//            $("#reg-cleaning").val('0');
            regRooms = 0;
        } else {
            regRooms = parseFloat($("#reg-cleaning").val());
        }
        if($("#reg-cleaning-stair").val() == ''){
//            $("#reg-cleaning-stair").val('0');
            regStairs = 0;
        } else {
            regStairs = parseFloat($("#reg-cleaning-stair").val());
        }

        rooms = regRooms + regStairs;
        total = total - regCleaning;
        regCleaning = 0;
        
        if(regRooms == 0 && regStairs == 0){
            minRegRoomsMet = true;
        }
        else if( rooms < 3){
            minRegRoomsMet = false;
            regCleaning = 114.95;
        
            total = total + regCleaning; 
        } else if($.isNumeric(regRooms) && $.isNumeric(regStairs)) {
           minRegRoomsMet = true;
            
            regCleaning = 114.95;
            regCleaning = regCleaning + (rooms - 3) * 20;
        
            total = total + regCleaning; 
        } 
        updateTotal();
    }
    function calulatePremClean(){
        var premRooms = 0
        var premStairs = 0;
        if($("#prem-cleaning").val() == ''){
//            $("#prem-cleaning").val('0');
            premRooms = 0.00;
        } else {
            premRooms = parseFloat($("#prem-cleaning").val());
        }
        if($("#prem-cleaning-stair").val() == ''){
//            $("#prem-cleaning-stair").val('0');
            premStairs = 0.00;
        } else {
            premStairs = parseFloat($("#prem-cleaning-stair").val());
        }

        rooms = premRooms + premStairs;
        total = total - premCleaning;
        premCleaning = 0;
        
        if(premRooms == 0 && premStairs == 0 ){
            minPremRoomsMet = true;
        }
        else if( rooms < 3){
            minPremRoomsMet = false;
            premCleaning = 149.95;

            total = total + premCleaning;
        } else if($.isNumeric(premRooms) && $.isNumeric(premStairs)) {
            minPremRoomsMet = true;  
            
            premCleaning = 149.95;
            premCleaning = premCleaning + (rooms - 3) * 25;

            total = total + premCleaning;
        }
        updateTotal();
    }
    function updateTotal(){
        total = total.toFixed(2);
        
        if(total == -0.00){
            total = +0.00;
            total = total.toFixed(2);
        }
        $("#quote-total").text("$" + total);
        updateMsg(); 
    }
    
    function updateMsg(){
        $text = $(".minimum-text");
        
        if(negative){
            $text.text(negMsg);
            $text.show();
        }
        else if(!minPremRoomsMet){
            $text.text(minPremMsg);
            $text.show();
        } else if(!minRegRoomsMet){
            $text.text(minRegMsg);
            $text.show();
        } else if(!minVentsMet){
            $text.text(minVentsMsg);
            $text.show();            
        } else {
            $text.hide();
        }
        
    }
});
