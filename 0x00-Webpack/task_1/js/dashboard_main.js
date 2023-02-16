import $ from 'jquery';
import _ from 'lodash';
$(function() {
let count = 0;

$('body').append("<p>Dashboard data for the students</p>");
$('body').append("<p>Click here to get started</p>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");
$('body').append("<p>Holberton Dashboard</p>");


$('button').on('click', _.debounce(updateCounter, 500));

function updateCounter() {
    count++;
    $("#count").html('${count} clicks on the button');
}
});
