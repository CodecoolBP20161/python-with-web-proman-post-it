$(document).ready(function() {
    $("#boards").hide();
    $("#edit").hide();
    $("#plus").click(function() {
        $("#add").replaceWith($("#edit"));
        $("#edit").fadeIn("slow");
    });
    $("#save").click(function() {
        $("#edit").replaceWith($("#boards"));
        $("#boards").fadeIn("slow");
        $("#add").fadeIn("fast");
    });
});
