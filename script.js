// Function to toggle course details when a course is clicked
function toggleCourseDetails(courseElement) {
    // Check if the clicked course is already active
    const isActive = courseElement.classList.contains("active");

    // Close all other courses and remove active class
    document.querySelectorAll(".course").forEach(course => {
        course.classList.remove("active");
    });

    // If the clicked course was not active, expand it
    if (!isActive) {
        courseElement.classList.add("active");
    }
}