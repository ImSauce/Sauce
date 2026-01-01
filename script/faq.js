$(document).ready(function() {
    // FAQ Accordion functionality
    $('.faq-question').on('click', function() {
        const faqItem = $(this).parent('.faq-item');
        const faqAnswer = faqItem.find('.faq-answer');
        
        // Check if this item is already active
        const isActive = faqItem.hasClass('active');
        
        // Close all other FAQ items
        $('.faq-item').removeClass('active');
        $('.faq-answer').slideUp(300);
        
        // Toggle the clicked item
        if (!isActive) {
            faqItem.addClass('active');
            faqAnswer.slideDown(300);
        }
    });

    // Optional: Close FAQ when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.faq-item').length) {
            // Uncomment the lines below if you want FAQs to close when clicking outside
            // $('.faq-item').removeClass('active');
            // $('.faq-answer').slideUp(300);
        }
    });
});