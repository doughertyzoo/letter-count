/*

Sort the characters in the following string:

abcdefghijklmnopqrstuvwxyz_

by the number of times the character appears in the following text (see testString below).

Now take the sorted string, and drop all the characters after (and including) the _. The remaining word is the answer.

*/

(function() {
    var testString = "uwlcnfcejefjudkmylhmmpjfkmhveozojepfvgboboxknkfdoghkvzxrkamhaghahpnnzh_figzhelkapd_dnxsiurbjgq_bcctqgigfksdrzgtxvihiqvfvinuqfzgohvilwyxpuqjolleuecpxcbisaptnoxbglpkhsvvwdgaminprfrha_uemwdepnngtxgkqx_flerkbnnzazcvnh_sealovrpuafumrmaizidjedvovhtbadjelfrbknpioqiindxqiozzpdrv_bwooblumjc_oqtcgrfmxkwkczhhqiwuqzoznqgfmbdxrxigvkebypbsybanuccpsezgv_dvteybbrbrbldbpiyhgzkptloxfktrzkjmdhppucsaohfnehdnlnhexwj_yhulslwpdreogjsffy_fkqcdkobywhqxpjvv_sqbscknxrew_ivgvpolmqfkyxoxzuyqctriyxcncwvvqhdupkagguee_zfbcrexbtkcsbnjcfzqoq_wrdktpsclzrmeybxpzrylfdydknd_zbjjqcnubpjbfaaecuxbeprjjjfcybvcghfbcvnjicpliwzkqvwo_hloynyjrmiqvubsyobetklnsgovesswqatrcrirsywdvbpwnhtjaug_nglxamsybkop_gnkdvgzp_cmyxclrtjtoohniuszzbnakknd_ahe_enbouxvpueotcjebex_vpqbwyjgczobcirmgfvwnlrxaryoltdlozwdgcp__iwu_vkod_kzkmeklloeixrxymlvyvtlfyydwtzxugrhxwqgmmsvtshrublypevlpglldlumsbscjuv_cbtfjpenrervyxtbrxaaqsqs__boiiubqmgwtvzxlnxxyskbwquztepk_uggukayehrifcrdpcnrfhmlucqzbsvoojsfexvbzsrccyqjuufbiae_siovpbhhqzkcemm_wtzio_d_emtkxpkpqftqjrhiiuvyijtwrmj_r_nlsaqemp_yph_murlmwwibzxnerld_fracudoxwqsmjkdvbfbnmkvktrkyyoct_woymzxswtd_dvs_joviugjjvswlltkforlv_xdokzbqkzrojvevuuzkpcvvaarca_oeryyuasilqpwrzkyrsbskjnywidkcefjdekawqutrihusqtq_bjaaysidwvpmhozxcsacpehceplbihgnuaucvatj_prb_fflzfyyrndrxq__ptxkcbhhslnuuwljwxbxzbujntztebr_knnffhl_cvxowdtpxldvsonhnfxxnmwopu_tgosofhhjhmxkdnvorwlsxy_cleasbnonadrgxf_bzipudfonthlclvnhumrbjkdryoawoz__ttftltixhdhd_qoteqmyehlulpffaqmughpxxsyeevncin_ymjsnndirfg_jjcltmgphlpudrjviaixlxnpwvr_bqygvuhoskhtv_pqnyzmjymrpnphebxqfpkfhzirotxayvclcr_zcrtsakfusyyujzdjgizngmonogwknjcndlpvktgntgajmzwcnkhggmhzijyrpbkpdcribyteyqchlldzeelebqjplphcdgpaaatdelz_khxpxqclexvlcjiyssgsgmsddclgmsae_eubvmscpjwascwegqdxvvh_zuteauydayapfamxilyugubce_kibquetsvlmguecrm_uojvkjammyevgxwfcfq_fjnauajadhsjvtsduzpmqecxfuqaaq__qhtvl_uurqaquuygypqxnhrnhhiwrufntlunfqwaydimaahiihvcaycinidodqzmrnxnnxdsquwc_u_zrrkscjv_jwsp_xfkupx_rcbzovpsbwyiumeaanyiaqromomqldfprejqnytjftdcklykzsdupl_makofxndacjbbftywdxmvmfv_wogpggfeivpfiqqlzcweelzclxkgqlvysuignftxqooofgvnopvtjy_udsf_wx_wloyznfixdeyxbvqljuncfmtvjhrrrpcxowggllwcmzlp_bgwpepdntxzjbqprgdtpdbtofhwknqdarbqvryfaiq_lneqwlwpjpfxbmttidphupuhwghgafybhtulwkgpoavwbtixuvqroknoas_pvufqfanwdvzraqpxudodpifa_s_xiaef_abeawgaamorlogpmmavrwbt_bzthsnzaxzitbyuohtqswnqekujrojerffenhkna_nyioesdgaeofpuoyoybuweuswzaraanyzkaxuncumlsnzoavkmjoejygohgtrqtdouiubigjhrutkk"

    var occurrences = {};
    var sortableOccurrences = [];
    var finalAnswer = []; 
    
    // Loop through each character of the testString and create a Javascript object (of letter & count) for each. Also populate a 
    // separate array of those objects, for later sorting on letter counts.
    for (var thisLetter, i = 0; i < testString.length; i++) {
        thisLetter = testString[i];

        // Javascript object exist yet?
        if (!occurrences[thisLetter]) {
            // No, then create it (with count of zero). Could have used less lines of code here, but opted for verbosity here.
            occurrences[thisLetter] = { letter : thisLetter, count : 0 };
            sortableOccurrences.push(occurrences[thisLetter]);
        }

        // Increment the count for the letter.
        occurrences[thisLetter].count++;
    }

    // Sort descending on letter's count.
    sortableOccurrences.sort(function (thisletter, thatletter) {
        return (thisletter.count < thatletter.count) ? 1 : (thatletter.count < thisletter.count) ? -1 : 0;
    });

    // Build short array for final answer, breaking on underscore character.
    for (var i = 0; i < sortableOccurrences.length; i++) {
        if (sortableOccurrences[i].letter === "_") {
            break;
        }
        finalAnswer.push(sortableOccurrences[i].letter);
    }

    console.log("FINAL ANSWER: d" + finalAnswer.join(''));

}());