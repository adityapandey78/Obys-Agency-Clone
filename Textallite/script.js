gsap.from("h1",{
    opacity:0,
    delay:0.5,
    duration:1,
    //https://github.com/jschr/textillate
    /*or pass in options on initialization (see full list of options below):

    $('.tlt').textillate({ in: { effect: 'rollIn' } });

    => .tlt ki jegeh apne div ka name likha hai
    */
    onStart:function(){
        $('h1').textillate({ in: { effect: 'fadeIn' }, out:{effect:'fadeOut'} });
    }
})