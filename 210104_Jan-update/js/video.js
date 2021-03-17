$(function () {
    $('.wrap, .job-wrap').on('click', '.video-modal, .movie-btn', function () {
        var theModal = $(this).data('target'),
            videoSRC = $(this).attr('data-video'),
            videoSRCauto = videoSRC + '?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1';
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});
