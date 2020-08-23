  $(document).ready(function() {

                $('#menu-trigger').click(function() {

                    $("body").css("overflow-y", "hidden");
                    $('#menu-bar-container').animate({
                        'left': '0%'
                    }, 400);
                    $('#body-wrapper').animate({
                        left: '30%'
                    }, 400);
                    $('#menu-drawer').fadeOut('normal');

                    $('#close').click(function() {
                        $("body").css("overflow-y", "scroll");
                        $('#menu-bar-container').animate({
                            left: '-85vw'
                        }, 400);
                        $('#body-wrapper').animate({
                            left: '0%'
                        }, 400);
                        $('#menu-trigger').fadeIn('normal');
                    });

                });
                var count = 2;

                $(function() {
                    $('.slides div:first').addClass('top');
                    var change = function() {

                        $("#slide-image-" + count).addClass('zoom');

                        var curr = $('.slides div.top');
                        var next = curr.next();
                        if (!next.length) {

                            next = $('.slides div:first');
                            next.addClass('top');

                            curr.animate({
                                opacity: 0.0
                            }, 1000, function() {
                                curr.removeClass('top');
                                curr.css({
                                    opacity: 1.0
                                });
                            });

                        } else {
                            next.css({
                                    opacity: 0.0
                                })
                                .addClass('top')
                                .animate({
                                    opacity: 1.0

                                }, 1000, function() {
                                    curr.removeClass('top');
                                });
                        }
                        count++;
                        if (count > 4)
                            count = 1;

                        $("#slide-image-" + count).removeClass("zoom");
                    };
                    setInterval(change, 5000);

                });
            });




    