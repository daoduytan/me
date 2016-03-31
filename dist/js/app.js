var app = angular.module("myPage" , ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

});

app.directive('myform', function(){
	// Runs during compile
	return {
		name: 'myForm',
		restrict: 'E',
		templateUrl: 'include/form.html'
	};
});
app.controller('homeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
	$rootScope.artices = [
        {
            name: 'Coding landing page music',
            link: '',
            background: 'boardgame.jpg'
        },

        {
            name: 'Loading icon wifth SVG',
            link: '',
            background: 'contact-form.png'
        },

        {
            name: 'Creat form validate',
            link: '',
            background: 'open.png'
        },

        {
            name: 'Music player',
            link: 'a',
            background: 'oplus.jpg'
        },

        {
            name: 'Animation css',
            link: '',
            background: 'perfecto.jpg'
        },

        {
            name: 'Loading icon wifth SVG',
            link: '',
            background: 'small_1x.png'
        },

        {
            name: 'Creat form validate',
            link: '',
            background: 'steak_exploration.jpg'
        },

        {
            name: 'Music player',
            link: 'a',
            background: 'taglor_landing.png'
        },
        {
            name: 'Coding landing page music',
            link: '',
            background: 'tasky02.png'
        },

        {
            name: 'Loading icon wifth SVG',
            link: '',
            background: 'untitled.png'
        },

        {
            name: 'Creat form validate',
            link: '',
            background: '347b758bc1203b916f04e40d83963e72.jpg'
        },

        {
            name: 'Music player',
            link: 'a',
            background: '2b5d28e2b10d8f5b9e1be5d08df495ee.jpg'
        }
    ]

    $rootScope.works =  [

        {
            name: 'The life pill',
            id: 'life-for-life',
            img: 'life-for-life-thum.jpg'
        },

        {
            name: 'Pay-it-forward Global',
            id: 'payitforward',
            img: 'payitforward-thum.jpg'
        },
        {
            name: 'ALN',
            id: 'aln',
            img: 'aln-thum.jpg'
        },
        {
            name: 'Care Ultima',
            id: 'careultima',
            img: 'careultima-thum.jpg'
        },
        {
            name: 'Website consulting',
            id: 'website-consulting',
            img: '21-thum.jpg'
        },
        {
            name: 'Steele &#038; Ungar',
            id: 'steelesungar',
            img: 'steelesungar-thum.jpg'
        },
        {
            name: 'Krcmic',
            id: 'krcmic',
            img: 'krcmic-thum.jpg'
        },
        {
            name: 'TotallyGuitars E-gift Card',
            id: 'guitar',
            img: 'guitar-thum.jpg'
        }
    ]

   
	$scope.blogLoad =  true;

    $scope.loadBlog =  function() {
    	$scope.blogLoad =  false;

         $('html, body').animate({
            scrollTop: 0
        }, 500, 'easeOutCirc')
    }	

    $scope.hideBlog =  function() {
         $scope.blogLoad =  true;
    }

     $scope.showW = function() {
        var nameWork = this.work.id;
        function work() {
            var workHeight = $('.works').offset().top,
                $gridItem = $('.work'),
                spinner = "<div class='loader'></div>";
            /* Act on the event */
            $('.detail-work')
                // .css('display', 'block')
                .css('height', 'inherit')
                .children('.inner-detail-work')
                .addClass('visible')
                .html(spinner)
                .load('works/' + nameWork + '.html');
            // $(this).parents('.works').prepend('<div class="detail-work"/>');

            $('html, body').animate({
                scrollTop: workHeight
            }, 1000);

            $('.gray').css('display', 'block');
        }

        work();
    }

    // canvas

    var Canvas = document.getElementById('canvas');
        var ctx = Canvas.getContext('2d');

        var resize = function() {
            Canvas.width = Canvas.clientWidth;
            Canvas.height = Canvas.clientHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        var elements = [];
        var presets = {};

        presets.o = function(x, y, s, dx, dy) {
            return {
                x: x,
                y: y,
                r: 12 * s,
                w: 5 * s,
                dx: dx,
                dy: dy,
                draw: function(ctx, t) {
                    this.x += this.dx;
                    this.y += this.dy;

                    ctx.beginPath();
                    ctx.arc(this.x + +Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + +Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
                    ctx.lineWidth = this.w;
                    ctx.strokeStyle = '#fff';
                    ctx.stroke();
                }
            }
        };

        presets.x = function(x, y, s, dx, dy, dr, r) {
            r = r || 0;
            return {
                x: x,
                y: y,
                s: 20 * s,
                w: 5 * s,
                r: r,
                dx: dx,
                dy: dy,
                dr: dr,
                draw: function(ctx, t) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.r += this.dr;

                    var _this = this;
                    var line = function(x, y, tx, ty, c, o) {
                        o = o || 0;
                        ctx.beginPath();
                        ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                        ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                        ctx.lineWidth = _this.w;
                        ctx.strokeStyle = c;
                        ctx.stroke();
                    };

                    ctx.save();

                    ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
                    ctx.rotate(this.r * Math.PI / 180);

                    line(-1, -1, 1, 1, '#fff');
                    line(1, -1, -1, 1, '#fff');

                    ctx.restore();
                }
            }
        };

        for (var x = 0; x < Canvas.width; x++) {
            for (var y = 0; y < Canvas.height; y++) {
                if (Math.round(Math.random() * 8000) == 1) {
                    var s = ((Math.random() * 5) + 1) / 10;
                    if (Math.round(Math.random()) == 1)
                        elements.push(presets.o(x, y, s, 0, 0));
                    else
                        elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
                }
            }
        }

        setInterval(function() {
            ctx.clearRect(0, 0, Canvas.width, Canvas.height);

            var time = new Date().getTime();
            for (var e in elements)
                elements[e].draw(ctx, time);
        }, 10);



    function clickBtn() {
        var element, circle, d, x, y;

        $(".btn span").hover(function(e) {
                element = $(this);

                if (element.find(".circle").length === 0)
                    element.prepend("<span class='circle'></span>");

                circle = element.find(".circle");
                circle.removeClass("animate");

                if (!circle.height() && !circle.width()) {
                    d = Math.max(element.outerWidth(), element.outerHeight());
                    circle.css({ height: d, width: d });
                }

                x = e.pageX - element.offset().left - circle.width() / 2;
                y = e.pageY - element.offset().top - circle.height() / 2;

                circle.css({ top: y + 'px', left: x + 'px' }).addClass("animate");
            },
            function() {
                circle.removeClass("animate");
            });
    }

    function smoothScroll(duration, easing) {
        $('a[href^="#"]').on('click', function(event) {

            var target = $($(this).attr('href'));

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, {
                    duration: duration,
                    easing: easing
                });
            }
        });
    }

    function close_work() {
        $('.gray, .close-work').click(function() {
            $('.gray')
                .css('display', 'none');

            $('.detail-work')
                // .hide();
                .css('height', 0)
                .children('.inner-detail-work')
                .removeClass('visible');
        });
    }

    // function skill() {
    //     var $skill = $('.skill-bar');
    //     $skill.each(function() {
    //         var $number = $(this).data('skill');
    //         $(this).append("<span class='number'/>");
    //         $(this).append('<div class="bar"/>');
    //         $(this).find('.number').text($number).css('left', $number);
    //         $(this).children('.bar').css('width', $number);
    //     });
    // }

    

    close_work();
    // skill();
    clickBtn();
    smoothScroll(500, 'easeOutCirc');
   

    $('.btn-nav').click(function() {

        if (!$(this).hasClass('open')) {
            openmenu();

            $('.main-nav ul li').each(function(i) {
                $(this).removeClass('is-visible').children('a').click(function() {
                    closemenu();
                });
                setTimeout(function() {
                    $('.main-nav ul li').eq(i).addClass('is-visible');
                }, 100 * i);
            });
        } else {
            closemenu();
            $('.main-nav ul li').each(function(i) {
                setTimeout(function() {
                    $('.main-nav ul li').eq(i).removeClass('is-visible');
                }, 200 * i);
            });
        }
    });

    function openmenu() {
        $('.btn-nav').addClass('open');
        $('body').addClass('active');
    }

    function closemenu() {
        $('.btn-nav').removeClass('open');
        $('body').removeClass('active');
    }



}]);

app.controller('skillCtrl', ['$scope', function($scope){
    $scope.skills = [
        {
            name: 'Photoshop',
            number: '85%'
        },
        {
            name: 'Html/Css',
            number: '90%'
        },
        {
            name: 'Javascript',
            number: '80%'
        },
        {
            name: 'UX/UI',
            number: '65%'
        }
    ]


    // function skill() {
    //     var $skill = $('.skill-bar');
    //     console.log($skill);
    //     $skill.each(function() {

    //         var $number = $(this).data('skill');

    //         $(this).append("<span class='number'/>");
    //         $(this).append('<div class="bar"/>');
    //         $(this).find('.number').text($number).css('left', $number);
    //         $(this).children('.bar').css('width', $number);
    //         console.log('hi');
    //     });
    // }

    // skill();
}]);


app.controller('blogCtrl', ['$scope', function($scope){
    // $('body').bind(function() {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 1000);
    // })
}]);

app.controller('postCtrl', ['$scope', function($scope){
    
    function startArticles() {
        var wScroll = $(window).scrollTop();

        if ($('#blog').offset().top - 200 < wScroll) {
            $('.article-thumb').each(function(i) {
                setTimeout(function() {
                    $('.article-thumb').eq(i).addClass('is-visible');
                }, 100 * i);
            });
        }
    }

    function articleTada() {
        var randNum = Math.floor(Math.random() * $('.article-thumb').length);
        $('.article-thumb').eq(randNum).addClass('is-animate')
            .siblings().removeClass('is-animate');
    }

    setInterval(function() {
        articleTada();
    }, 4000);

    $(window).scroll(function() {
        startArticles();

    });
}])