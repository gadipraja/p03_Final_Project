//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function calculate(){
  var oct = document.getElementById('fueltype').value;
  var destination = document.getElementById('destination').value;
  var mpg = document.getElementById('mpg').value;
  var tank = document.getElementById('gastank').value;
  setCookie('destination', destination);
  setCookie('octane', oct);
  setCookie('mpg', mpg);
  setCookie('maxcap', tank);
  if(oct != 87 && oct != 89 && oct != 91)
  {
    window.alert("Choose a valid octane, the option is 87, 89, or 91. Choose the closest one if you use other octane number");
  }
  else if(mpg < 0 || mpg == '')
  {
    window.alert('mpg not valid');
  }
  else if(tank < 0 || mpg == '')
  {
    window.alert('tank capacity not valid');
  }
  else {
    window.alert('Your Result is Ready');
    document.getElementById('but').classList.remove('disabled');
  }
}

var sf = {dists: 173 ,dur:'3hr 12min ' ,img:'https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,zJDYUHd2dqBY3cUK4OVVgA53xvaIPJFtSgEaZ1DAXszIFvHmNCdMSL9v1PeEpiBnuS9YwsbYj3GIAzu4rRaLIpypGAWkxxwvkHP6WXJS2fcU3NfpcF4U18BCcWZqlJXUz1kNyA5mh7so3NGuhxIGqXE,pjkJJ75WeEkjH9HQdBkpQRDJp9Fv-r3hYGOsMp0VmLfb5HQzPq_kIBOELwHJGXkPzUS_w7TRtY2HaHppXssLge0fQYDwKMYZBCtc-3HgghDDbVqIdU7B5bXpE066sDXyk6hla4S8A5lVW_61H84BKFL1mSJ5HCHMm3xMLVHdsuNfB2w3pOhw6URPh16UZlhvWJpro03YdSXzv_7yZN7BesoXnQsIa26fjBpHUFVMzVoHiv3nqWrstmGrlTXoy1IgwpMqv8zAmd1aoWvIIbrEmvGNyyv_vYsJXXogtA6o3X94YAWrOLeJHymq_-2K_VeTIgHrUHJP5MJfFbgGmthj2x-S9fq0ko0W8jxK0VR3n_ESFch2NQYwdBFe88A3TM2h9xSvuX3s3kENKRp5POVP3vuUlMnRtbLqdg?scale=1&h=200&w=643'};
var nv = {dists: 156 ,dur:'2hr 33min' ,img:'https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,3AC9guoUfGP9oHQRB4QU6fudG59hC1TYONNlhVyyyZwUffKr9qAClAy60CeveauSWKpRZIWupdEPL8CB8X7Sn7MIAKnffuF_U-fxND5-bKE-T8gIVD8S60kkAcP_DVDHP_OV_citwEwuEPucg7t7DFs,qmpOzsLgRg__MPZVOHkEz8VOUEuL6uaVYTPRvHDg3hCmpvQqeicXrC_buObabOOsTYc4lKpgayJ1rbnM_XiJfdjj2OqCP7VRHCW78RAFjS-NkwJRwPP7NDAqZVWH58n0Gyghv9n6nK4_8JoC4KCXkrefIvNpk3SkLikyL8_MSnG-d_0J2SZBPtAATFGAK6XMLwKCZL8G7xgcHIblFZFmRHxla1AXA-O8vbCub9VE99AWEGNRFUXDNts3DYac74u1TeAJrajlg1jpu1kjY8gROhIn3yKQ2NamD2OkUHldHeS5cU71fdxdJq1kkiI3Wz5mNrlfa-PItOslm5lJSFVyRHfEcYhS0cvbwPLnPKV6sSYHA-DDzE6ilTq1aGt8fnV3zGDY-7bk0URL3ug4LacNbt9boAFMSxkl6YA?scale=1&h=200&w=643'};
var sac = {dists: 89.7 ,dur:'1hr 32min' ,img:'https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,SbUdkPMePhXyAYDIfiXIr6D7YgXXM18aN6IqsYUiSBnBDSjT-phBaarwOecCCTHWPjNavpB93pylbAYFCTATkTHae8dUz29aYAqVuSH2YsViOtw0jvg1GYhfYVzP7hkONclyUYy0aS4xpbVv1DlGxzk,TPDsbSgguKXfujJzyNHF9vsyPzEYUl9pb5gC1K1HLhka9qvTF77xKrc7E0a3eyIvatEijClQ5jnRkN-RFL2D1m2p7y3Lkj1al53p1TsXTRiVIYklb0RghZni3IqWipEWaH2UhL_0rK788ELK-Po86fjMOkX2untSZM6G0R7bj9_LRIMQ3tgyp5K7Lqi9_GPNiFYdRrpdnGQ0mOmIH8JPfl_EB4rTPRPaNDa7ZBb1A7f4-UXgnAQeq_x6MnlO2vqCd6GSXctltWSo69lSMYv8llvMpw00axjD0Mt0C7qO31HCmcFd0gNO1s7nGYVbGx5U6-IMlEGNeK-4iWeTxYtzSf7eQbyOzTP7zSAP2pr-rtkaq03ApVA9NQI_FcEGJByUpRyBLAy7-DzCc9IqzkxDBbsvB9jZSw?scale=1&h=200&w=643'};
var lt = {dists: 148,dur:'2hr 42min' ,img:'https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,0aTf0smFE4CT8nl5Nf3cOyKtm3wu7tQEYAFZ867utb83TRWssbLToD1CjpfGGmfrHMJKrL0owAAiFREy-odmxCQyhpyS4U6ImaDo29ZZyTHgXdK6AJsGu6QYtS-Is8Dx0oITK7wui3Q2HHgDIVldn_0,gA7gUXwyV5cEAuhZbiw9iDGipIQFrzt8-ecPiSu7uNWZKsmZBdG60v4uxEQWxzacQ2QqELxIxNMd9_Q_ysa8zYTW3Yjyn3sLXtsblb-a2o0MvfFKKeYALEfpy85pQnKdbHs3SgJ3adAQy2L83brKYNvpqO0tdQUtS6Raz-9g44p-o3oT584piyGKD8h8eWyq8P3BcYjX9UrYr1dOEHa1_uvwlesU3Iih88PoxR7mzrm0vgTaBoWeXUI-euivZ9vr_cLjtGlF56ohK2EtoXVX1TM65bHsZDiCymsvwVgS1EGoBjjKGAwQtyO0wYfrsYe6xJ7K4NMr6V78t1W_vOB6SA_EVQnwLlH8PKu2c0s9R-NXx8RIA24teERv5WfSV_Ed1jY3iZOiPPnNm7ITwqNqDorU_xFPcAa4dV4?scale=1&h=200&w=643'};
var ms = {dists: 146 ,dur:'2hr 35min' ,img:'https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,pkSDlgiMtkwTRqaJmafpHNqiS29kE3bvMxNE4s8CB9y1JXa-fo0BtNvT-RxLOTfrpNBRvn2efvACyRPM5T6d2bDtSao5InAfYnA1uQSBWU4cVTrtXOkq-kuGc3YbddDanrxmkz7ZKWQ_qinR4U-YKxU,ste0VcwYFdEuJQf2ILQur0_8kkP88AFg8CpX406XmYTE-PT5HScuXJm_u0wdmrY4D4Wl-ldadjnfF753IyVJQyxXOn1VIEReobPXwV2rUOAMTb5RxhUJcL40TCpUCjW0I9YUI8L2MIWJyqU6Jp50hLTjSgUOFvam0AX2HX2MlMavhfFVUYJpYYTcT1MWGIBLn4lviFJP61Tv9FlIZg8ZgeVsWIz1hcqjC8PY21y3oLC3ckntWZ4sTu3zYP_5X5gLQKd-pbBxGFvTFvqtbZ1JMpgu3boMHoZfpmObqWhQtmfMUn4F96uy2YGF8tgm4huDrvk2webWik22Y7BAytvizZDN1PwMhrMK_aiLTAgg2X4w8WHRxvLjNuuXkIGUg-PsLWgFzmQSDux6foiaft1cmewWil00QOuLTT9_eA?scale=1&h=200&w=643'};
var ao = {dists: 206 ,dur:'3hr 19min' ,img:'https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,6WDMDotRGp90wpcAT8EpuDcxdBPmyIaof1ujXBmc75c2T2ah7EEXoPC3aLafocZC_mh7xIv-68A2guMGi0DYdVtrtj48bQZniomveQJ4Nu4CMuAXWe7cOA8eH65FF3F3HOSJjeeWrZZMyqGVziQoczM,frVmuHq4U9AtajedWiBuuoZH_E17TvORlcT16phuCJVA6K5LNcUNnAZAj400-TR09zjXzgksxd_2XcqT89RpvhryaAIj73lViDpRNafho-U3-WZqpEWkaeBt2MfFuvTFzwcjg0YwLJbNbFqHma20LWqqtgPCHvBw_hMXsBTVfkjzLw8lueSDRiyllUG09wErZXzQKFyDGP4xEwZsioaUr1NeVV-ZmA62OXggDZOMB1NnxPrtCy8rQGODk2ZY0Z48y1QA2no7wvQJOwK7s42sK5zTn-wvFV-JgJQb_7RRgdkYbjmsF40UWoQI5UJ48LAAt4ej17A7V8nGNdvMEoCzTkasDUvVeECQ5hghIi7WlDA-OfvNX3e2BYCUMioQzKWsBPckbaU01kx1ooqah6Oz2xqizoflM4NpTh5auUVO?scale=1&h=200&w=643'};
var rnf = {dists: 239 ,dur:'4hr 56min' ,img:'https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,tPcG2A2ONpIBaeTT6DzCABHJa35_hLCe9KzhihcyMFrY1z5xJ4caxpLG56QX2WHaBEviw96ypME-7gCij7SBWt5rurDOkCHdcKDvcWnYcGaybJsGkIfjONZZI3tMLEw4lZB2Z2xgMbfYzcTBuBkyPpA,EWk9Z10JE3iMBmaAKlt13aHiEnABaaZbdfwn_mAgKwDltx18tix7-8SIzWfahim9aAFpyhQqXfCuVgPl-111t00znWHtpJQO2KAS1z3MRPx-hFy74aqtk_uok3E_igU9FsouJwT_dwB17reJbDu_8nZm-oFWhlGY77P7OL9gs9CF_6IKLJzEotkW3uTCgV40RLCh-DoC7H6AG98pjN2IVlGZyqnlkeOLzLq7hMrnQ5FZ1VVolPCiNtxBQ23YMGY32W4IDuUz22CtnM-pIatc7njwWA0UBSvTg2OKDedABjF29C-6y2eDVJZmaNl4xklfh8vbN29lJnnck0jCrCFoHobH2mmT8qV48tdiOM-jbrQdGVappfJEh5opCXLjlObNwmgZlUn4M1H_Y0IwKsZWa1zS1_sQ_lKMyZmSOI_cRti30ILgrRw?scale=1&h=200&w=643'};
var destin = [sf, nv, sac, lt, ms, ao, rnf];

function getdata() {
  var oct = getCookie('octane');
  var destination = getCookie('destination');
  var mpg = getCookie('mpg');
  var tank = getCookie('maxcap');
  var loc = document.getElementById('locate');
  var d = ['San Francisco', 'Napa Valley', 'Sacramento', 'Lake Tahoe', 'Mt. Shasta', 'Ashland, Oregon', 'Redwood National Forest'];
  for(var i = 0 ; i < d.length; i++)
  {
    if(destination == d[i])
    {
      document.getElementById('destination').innerHTML = destination;
      document.getElementById('distance').innerHTML = destin[i].dists + ' miles';
      document.getElementById('duration').innerHTML = destin[i].dur;
      document.getElementById('gas').innerHTML = (destin[i].dists/mpg).toFixed(2) + ' gallons';
      if(oct == 87)
      {
        document.getElementById('cost').innerHTML = '$'+((destin[i].dists/mpg).toFixed(2)*2.43).toFixed(0);
      }
      else if(oct == 89)
      {
        document.getElementById('cost').innerHTML = '$'+((destin[i].dists/mpg).toFixed(2)*2.63).toFixed(0);
      }
      else {
        document.getElementById('cost').innerHTML = '$'+((destin[i].dists/mpg).toFixed(2)*2.83).toFixed(0);
      }
      if((destin[i].dists/mpg).toFixed(0) < tank){
        document.getElementById('gasstop').innerHTML = '0';
      }
      else {
        document.getElementById('gasstop').innerHTML = ((destin[i].dists/mpg)/tank).toFixed(0);
      }
      var imgs = document.createElement('img');
      imgs.src = destin[i].img;
      loc.appendChild(imgs);
    }
  }
}
