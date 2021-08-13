jQuery(document).ready(function ($) {
    function garland() {
        const lents = [
            $('.green'),
            $('.red'),
            $('.blue'),
            $('.yellow'),
        ];
        let energyI = 0.0;
        let energyJ = 0.0;

        let i = 0;
        let j = 1;

        let endI = false
        let endJ = false

        setInterval(function () {
            if (!endI) {
                energyI += 0.1
                if (endJ) {
                    energyJ -= 0.1
                    if (energyJ <= 0.0) {
                        endJ = false
                        endJ = 0.0
                        energyI = 1.0
                        j = i + 1
                    }
                } else {
                    if (energyI >= 1) {
                        endI = true
                        energyI = 1.0
                    }
                }
            } else {
                energyJ += 0.1
                energyI -= 0.1
                if (energyJ >= 1) {
                    endJ = true
                    endI = false
                    energyI = 0.0
                    energyJ = 1.0
                    i = j + 1
                }
            }
            if (j >= lents.length) {
                energyJ = 0.0
                energyI = 1.0
                j = 1
            }

            if (i >= (lents.length - 1)) {
                i = 0
                energyI = 0.0
                energyJ = 1.0
            }

            lents[i].each(function () {
                $(this).css({
                    'opacity': energyI,
                });
            });


            lents[j].each(function () {
                $(this).css({
                    'opacity': energyJ,
                });
            });


        }, 100);

    }
    garland();
});