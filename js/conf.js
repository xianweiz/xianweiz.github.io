
	var confArray = [//new Array();
	"ICS\'17|01/11/2017|01/18/2017|03/20/2016|Jun 14-16,2017|Chicago, US|http://www.ics-conference.org/"
	,"HPDC\'17|01/10/2017|01/17/2017|03/29/2017|Jun 26-30,2017|DC, US|http://www.hpdc.org/2017"
	,"SPAA\'17|02/09/2017|02/09/2017|04/20/2017|Jun 24-26,2017|DC, US|http://spaa.acm.org"
	,"PODC\'17|02/10/2017|02/10/2017|04/26/2017|Jul 25-27,2017|DC, US|http://www.podc.org"
	,"ISLPED\'16|02/21/2016|02/28/2016|04/30/2016|Aug 8-10, 2016|San Francisco, US|http://www.islped.org"
	//,"ASAP\'15|02/27/2015|03/06/2015|05/15/2015|Jun 27-29,2015|Toronto, Canada|http://www.eecg.toronto.edu/asap2015/"
	,"ICPP\'17|03/13/2017|03/13/2017|05/13/2017|Aug 16-19,2017|Bristol, UK|https://icppconf.wordpress.com/"
	,"PACT\'17|03/14/2017|03/14/2017|03/24/2017|Sep 9-13,2017|Portland, US|https://pactconf.org"
	,"CASES\'16|04/01/2016|04/08/2016|05/20/2016|Oct 02-07, 2016|Pittsburgh, US|http://esweek.acm.org/cases/"
	//,"SC\'15|02/16/2015|02/16/2015|00/00/2015|Nov 15-20, 2015|Austin, US|http://sc15.supercomputing.org"
	,"ICCAD\'16|04/18/2016|04/25/2016|06/20/2016|Nov 7-10, 2016|Austin, US|https://iccad.com"
	,"CODES+ISSS\'16|04/01/2016|04/08/2016|05/20/2016|Oct 02-07, 2016|Pittsburgh, US|http://esweek.acm.org/codesisss/"
	,"ICCD\'16|05/13/2016|05/20/2016|07/29/2016|Oct 03-05, 2016|Phoenix, US|http://www.iccd-conf.com/Home.html"
	,"MICRO\'16|04/03/2016|04/10/2016|06/25/2016|Oct 15-19, 2016|Taipei, Taiwan|http://www.microarch.org/micro49/"
	,"ASPLOS\'17|08/08/2016|08/15/2016|11/17/2016|Apr 08-12, 2017|Xi'an, China|http://www.ece.cmu.edu/calcm/asplos2016/"
	,"HPCA\'17|07/25/2016|08/01/2016|10/12/2016|Feb 04-08, 2017|Austin, US|http://hpca2017.org"
	,"DATE\'17|09/08/2016|09/13/2016|11/07/2016|Mar 27-31, 2017|Lausanne, Switzerland|http://www.date-conference.com"
	,"ISPASS\'17|10/07/2016|10/14/2017|01/30/2017|Apr 23-25, 2017|San Francisco, US|http://www.ispass.org/ispass2017/"
	,"SIGMETRICS\'17|01/10/2017|01/17/2017|03/20/2017|Jun 5-9, 2017|Urbana-Champaign. US|http://sigmetrics.org/sigmetrics2017/"
	,"ISCA\'17|11/11/2016|11/18/2017|03/08/2017|Jun 24-28, 2017|Toronto, Canada|http://isca17.ece.utoronto.ca/doku.php"
	,"DAC\'17|11/15/2016|11/22/2016|02/16/2017|Jun 18-22, 2017|Austin, US|https://dac.com"
	,"ICDCS\'17|12/05/2016|12/12/2016|03/06/2017|Jun 5-8, 2017|Atlanta, US|http://icdcs2017.gatech.edu/"
	//,"CGO\'15|09/05/2014|09/12/2014|11/03/2014|Feb 07-11, 2015|San Francisco, US|http://cgo.org/cgo2015/"
	//,"PPoPP\'15|09/05/2014|09/12/2014|11/10/2014|Feb 09-11, 2015|San Francisco, US|https://ppopp15.soe.ucsc.edu"
	,"HiPEAC\'17|06/01/2016|06/01/2016|11/15/2016|Jan 23-25, 2017|Stockholm, Sweden|https://www.hipeac.org/2017/stockholm/"
	,"IPDPS\'17|10/18/2016|10/23/2016|01/08/2016|May 29- Jun 2, 2017|Orlando, US|http://www.ipdps.org"
	,"ASPDAC\'17|07/08/2016|07/08/2016|09/12/2016|Jan 16-19, 2017|Tokyo, Japan|http://www.aspdac.com/aspdac2017/cfp/"
	,"DSN\'17|11/28/2016|12/05/2016|03/05/2017|Jun 26-29, 2017|Denver, US|https://dsn2017.github.io/"
	];

	var confTable= "<table class='TFtable' id='conf_table' width='55%' border='2' cellspacing='0' cellpadding='0'>";
  	confTable+="<thead><tr bgcolor='#FF0000'>"
  	confTable+="<td width='12%' align='center'><font face='Arial, Helvetica, sans-serif'> <b>Conference</b> </font> </td>"
	confTable+="<td width='15%' align='center'><font face='Arial, Helvetica, sans-serif'> <b>Abstract Date</b> </font></td>"
  	confTable+="<td width='15%' align='center'><font face='Arial, Helvetica, sans-serif'> <b>Fullpaper Date</b> </font></td>"
  	confTable+="<td width='17%' align='center'><font face='Arial, Helvetica, sans-serif'> <b>Notification Date</b> </font></td>"
  	confTable+="<td width='15%' align='center'><font face='Arial, Helvetica, sans-serif'> <b>Conf Date</b> </font></td>"
  	confTable+="<td width='20%' align='center'><font face='Arial, Helvetica, sans-serif'> <b>Location</b> </font></td>"
  	confTable+="<td width='5%' align='center'><font face='Arial, Helvetica, sans-serif'> <b>WWW</b> </font></td>"
  	confTable+="</tr> </thead>";

	var date_loc = 1;

	for (var row=0; row<confArray.length; row++)
	{
		/*split into cols*/
		var res = confArray[row].split("|");

		/*if Date has passed, then strikethrough the row*/
		var confDate = Date.parse(res[date_loc])
		var nowDate = new Date()

		if(nowDate>confDate){
			confTable+="<tr class=\"strikeout\">";
		} else {
			confTable+="<tr>"
		}
		/*create each column*/
		for (var col=0; col<res.length; col++)
		{	
			if(col==res.length-1)
				confTable+="<td align='center'><font face='Arial, Helvetica, sans-serif'><a href='" + res[col] + "'>www</a></font> </td>"
			else
				confTable+="<td align='center'><font face='Arial, Helvetica, sans-serif'>" + res[col] + "</font> </td>"
		}
		confTable+="</tr>"
	}
	confTable+="</table>";
	document.getElementById('my_table').innerHTML = confTable;
	//document.write(confTable);
