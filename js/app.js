$(document).ready(function() {

  OnScroll();
  PieChart();
  AnimatesSection();
  Submit();

});

var Nav = $("nav a");

function ActiveLink(ActiveL) {
  Nav.removeClass("Active");
  $("a[href='#" + ActiveL + "']").addClass("Active").css("transition", "none");
}

function OnScroll() {

  $(window).scroll(function() {

    var CurrentScroll = $(window).scrollTop();

    Nav.css("transition", "all 1s ease");

    var Home = $(".HomeSection").offset().top - 100;
    var About = $(".AboutSection").offset().top - 100;
    var Work = $(".WorkSection").offset().top - 100;
    var Contact = $(".ContactSection").offset().top - 100;

    if (CurrentScroll > Home && CurrentScroll < About && Work && Contact) {
      ActiveLink("Home");

    } else if (CurrentScroll > Home && About && CurrentScroll < Work && Contact) {
      ActiveLink("About");

    } else if (CurrentScroll > Home && About && Work && CurrentScroll < Contact) {
      ActiveLink("Work");

    } else if (CurrentScroll > Home && About && Work && Contact && CurrentScroll > Contact) {
      ActiveLink("Contact");

    } else if (CurrentScroll >= 0 && CurrentScroll <= Home) {
      ActiveLink("Home");

    } else {
      ActiveLink("Contact");
    }
  });
}

// Animate Section Function that Animates the Page to Scroll Once a Link is Clicked
function AnimatesSection() {

  Nav.removeClass("Active").css("transition", "none");

  $("header a").click(function(e) {

    e.preventDefault();

    var SectionID = this.hash;

    if(!$(this).hasClass("Active") || $(this).hasClass("Logo")) {

      // Animates All of HTML and Body to Animate and Scroll to the Corresponding Link IDs Clicked
      $("html, body").animate({

        // Allows the Page to Automatically Scroll to a LinkID Once Clicked Through Appending a # to the ViewID
        scrollTop: $(SectionID).offset().top

      }, 1000);
    }

  });
}

function EmailValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Returns the Result of the Test
  return re.test(email);
}

function Submit() {

  $("#submit").click(function(e) {

    var submit = false;
    var Name = $("#name").val();
    var Email = $("#email").val();
    var Message = $("#message").val();

    if (Name === "" | Email === "" | Message === "") {

      submit = false;
      swal({
        title: 'Error',
        text: 'Please fill out all the inputs. Thank you.',
        showConfirmButton: true,
        confirmButtonColor: "#34c77f"
      });
      e.preventDefault();

    } else if (EmailValid(Email) === false) {

      e.preventDefault();

      submit = false;
      swal({
        title: 'Error',
        text: 'Please enter a valid email. Thank you.',
        showConfirmButton: true,
        confirmButtonColor: "#34c77f"
      });

    } else {

      submit = true;
      swal({
        title: 'Message Recieved',
        text: 'Thank you for contacting me',
        timer: 5000,
        showConfirmButton: false,
      });

      console.clear();
    }
  });
}

function PieChart() {

  d3.json("data/data.json", function(data) {

    // Drawing area
    var w = 200;
    var h = 200;

    // Color Scheme
    var color = d3.scaleOrdinal().range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"]);

    // Define dimensions of Pie Chart
    var pieWidth = 200;
    var pieHeight = 200;

    // Define radius of pie
    var outerRadius = w / 2;

    // Define inner radius
    var innerRadius = 0;

    // Create Pie Chart
    var pie = d3.pie().
    value(function(d) {
      return d.value;
    });

    // Draw arcs as svg path elements
    var arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    // Create SVG Elements
    var pieSVG = d3.select('.pie-chart').append('svg')
      .attr('width', w)
      .attr('height', h)
      .append('g');

    // Create Each Wedge of the Pie
    var pieArcs = pieSVG.selectAll('g.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('transform', 'translate(' + outerRadius + ', ' + outerRadius + ')');


    // Draw SVG Arc Paths for Each Wedge, FIll in with Color
    pieArcs.append('path')
      .attr('d', arc)
      .attr('fill', function(d) {
        return color(d.value);
      })

      .attr('d', arc).on("click", function(d, i) {

        switch (d.value) {

          case 27:
            swal({
              title: "PHP",
              text: "I am very skilled in PHP programming in regards to creating databases and dynamic web pages. I tutored as well as taught my peers to write and debug PHP efficiently.",
              showConfirmButton: true,
              confirmButtonColor: "#34c77f",
              confirmButtonText: "Awesome!"
            });
            break;

          case 26:
            swal({
              title: "CSS",
              text: "I am also very good with CSS and always get compliments such as clean and full of character on the website designs I create.",
              showConfirmButton: true,
              confirmButtonColor: "#34c77f",
              confirmButtonText: "Good to Know!"
            });
            break;

          case 23:
            swal({
              title: "JavaScript",
              text: "Utilizing my JavaScript and JQuery skills I can create beautiful user interface actions to complete your website.",
              showConfirmButton: true,
              confirmButtonColor: "#34c77f",
              confirmButtonText: "Cool!"
            });
            break;

          case 25:
            swal({
              title: "SQL",
              text: "In addition to PHP, I am very well versed in the language of SQL in regards to SQL Databases.",
              showConfirmButton: true,
              confirmButtonColor: "#34c77f",
              confirmButtonText: "Nice!"
            });
            break;
        }
      });

    // Add labels to each Wedge
    pieArcs.append('text')
      .attr('transform', function(d) {
        // Centroid is calculated as center point
        return 'translate(' + arc.centroid(d) + ')';
      })
      .attr('text-anchor', 'middle')
      .text(function(d) {
        // Use d.value to retrieve data from dataset
        switch (d.value) {

          case 26:
            return "CSS";

          case 23:
            return "JavaScript";

          case 27:
            return "PHP";

          case 25:
            return "SQL";
        }
      })
      .attr('class', 'pie-label').style("font-size", "13px").style("cursor", "pointer").style("padding", "10px");

  });
}
