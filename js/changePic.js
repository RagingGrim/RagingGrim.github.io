// http://www.cs.up.ac.za/users/image/u16169532

arr = [10524208, 11236087, 12061574, 12077420, 12101232, 12138747, 12192539, 12206522, 12231992, 13012917, 13030851, 13032616, 13042352, 13073118, 13079752, 13159102, 13190581, 13197283, 13208642, 13222563, 13247914, 13286383, 13318366, 13321227, 14007810, 14009880, 14016304, 14017823, 14038286, 14041368, 14044537, 14052904, 14059950, 14070970, 14079412, 14096872, 14101263, 14135494, 14137217, 14157022, 14163285, 14171067, 14182794, 14197520, 14199468, 14206642, 14211752, 14227003, 14243696, 14254442, 14267404, 14277469, 14283124, 14286875, 14291194, 14309999, 14340578, 14347980, 14369852, 14395305, 14402425, 14415888, 15002455, 15003109, 15004709, 15006558, 15008739, 15015026, 15015531, 15016715, 15016880, 15019773, 15021654, 15024522, 15026681, 15028896, 15030378, 15034993, 15037836, 15043844, 15046657, 15048366, 15055214, 15059350, 15067735, 15077650, 15081011, 15089097, 15096794, 15109233, 15109934, 15110045, 15135421, 15170404, 15175295, 15178782, 15185703, 15187145, 15191223, 15192556, 15197523, 15216498, 15228194, 15228704, 15232672, 15239595, 15244882, 15245579, 15250378, 15255426, 15257020, 15272363, 15291792, 15310061, 15314694, 15321861, 15323413, 15330967, 15336728, 15348751, 15402453, 16000936, 16002858, 16004303, 16006250, 16007493, 16008368, 16009674, 16010648, 16011130, 16011202, 16011822, 16016612, 16018886, 16020431, 16023359, 16024479, 16026889, 16028440, 16029519, 16030193, 16033150, 16033796, 16036094, 16039689, 16040865, 16044984, 16045816, 16056559, 16056885, 16057300, 16059795, 16063563, 16070322, 16073364, 16077343, 16081758, 16087993, 16091265, 16094965, 16095414, 16103948, 16155140, 16163088, 16168080, 16169532, 16176643, 16182732, 16217498, 16234805, 16254661, 16262949, 16265816, 16268696, 16285256, 16323883, 16343825, 16383924];

function changeImage(){
	setInterval(cf,2500);
}

function randomA(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function cf() {
  img = document.getElementById('userImage');
  img.src = 'http://www.cs.up.ac.za/users/image/u' + arr[randomA(0,arr.length)].toString();
}
