function createCopyBtns() {
    var $codeArea = $("figure table");
    //查看页面是否具有代码区域，没有代码块则不创建 复制按钮
        if ($codeArea.length > 0) {
              function changeToSuccess(item) {
             $imgOK = $("#copyBtn").find("#imgSuccess");
                if ($imgOK.css("display") == "none") {
                    $imgOK.css({
                        opacity: 0,
                        display: "block"
                    });
                    $imgOK.animate({
                        opacity: 1
                    }, 1000);
                    setTimeout(function() {
                        $imgOK.animate({
                            opacity: 0
                        }, 2000);
                    }, 2000);
                    setTimeout(function() {
                        $imgOK.css("display", "none");
                    }, 4000);
                };
        };
$(".post-body").before('<div id="copyBtn" style="opacity: 0; position: absolute;top:0px;display: none;line-height: 1; font-size:1.5em"><span id="imgCopy" ><i class="fa fa-paste fa-fw"></i></span><span id="imgSuccess" style="display: none;"><i class="fa fa-check-circle fa-fw" aria-hidden="true"></i></span>');
 var clipboard = new Clipboard('#copyBtn', {
            target: function() {return document.querySelector("[copyFlag]");
            },
            isSupported: function() { return document.querySelector("[copyFlag]");
            }
        });
 clipboard.on('success',
            function(e) {
e.clearSelection();
                changeToSuccess(e);
            });
clipboard.on('error',
            function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            });

$("#copyBtn").hover(
            function() {
                $(this).stop();
                $(this).css("opacity", 1);
            },
            function() {
                $(this).animate({
                    opacity: 0
                }, 2000);
            }
        );
    }
}
$("figure").hover(
    function() {
$("[copyFlag]").removeAttr("copyFlag");
$(this).find(".code").attr("copyFlag", 1);
$copyBtn = $("#copyBtn");
        if ($copyBtn.lenght != 0) {

$copyBtn.stop();
            $copyBtn.css("opacity", 0.8);
            $copyBtn.css("display", "block");
            $copyBtn.css("top", parseInt($copyBtn.css("top")) + $(this).offset().top - $copyBtn.offset().top + 3);
            $copyBtn.css("left", -$copyBtn.width() - 3);
        }
    },
    function() {
$("#copyBtn").animate({
            opacity: 0
        }, 2000);
    }
);
$(document).ready(function() {
  createCopyBtns();
});








































