
	var confArray = [//new Array();
	"ICS\'16|01/15/2016|01/22/2016|03/21/2016|May 30-Jun 1,2016|Istanbul, Turkey|http://ics16.bilkent.edu.tr/"
	,"HPDC\'16|01/11/2016|01/18/2016|03/12/2016|May 31-Jun 4,2016|Kyoto, Japan|http://www.hpdc.org/2016"
	,"SPAA\'16|01/14/2016|01/16/2016|03/23/2016|Jun 27-29,2016|Moneterey, US|http://spaa.acm.org"
	,"PODC\'16|02/12/2016|02/12/2016|04/29/2016|Jun 25-28,2016|Chicago, US|http://www.podc.org"
	,"ISLPED\'16|02/21/2016|02/28/2016|04/30/2016|Aug 8-10, 2016|San Francisco, US|http://www.islped.org"
	,"ASAP\'15|02/27/2015|03/06/2015|05/15/2015|Jun 27-29,2015|Toronto, Canada|http://www.eecg.toronto.edu/asap2015/"
	//,"ICPP\'15|03/02/2015|03/02/2015|05/09/2015|Sep 01-04,2015|Beijing, China|http://icpp2015.tsinghua.edu.cn"
	,"ICPP\'16|02/26/2016|02/26/2016|05/06/2016|Aug 16-19,2016|Philadelphia, US|http://icpp2016.cs.wcupa.edu/"
	,"PACT\'16|03/14/2016|03/21/2016|06/30/2016|Sep 11-15,2016|Haifa, Israel|https://pactconf.org"
	,"CASES\'16|04/01/2016|04/08/2016|05/20/2016|Oct 02-07, 2016|Pittsburgh, US|http://esweek.acm.org/cases/"
	//,"SC\'15|02/16/2015|02/16/2015|00/00/2015|Nov 15-20, 2015|Austin, US|http://sc15.supercomputing.org"
	,"ICCAD\'16|04/18/2016|04/25/2016|06/20/2016|Nov 7-10, 2016|Austin, US|https://iccad.com"
	,"CODES+ISSS\'16|04/01/2016|04/08/2016|05/20/2016|Oct 02-07, 2016|Pittsburgh, US|http://esweek.acm.org/codesisss/"
	,"ICCD\'16|05/13/2016|05/20/2016|07/29/2016|Oct 03-05, 2016|Phoenix, US|http://www.iccd-conf.com/Home.html"
	,"MICRO\'16|04/03/2016|04/10/2016|06/25/2016|Oct 15-19, 2016|Taipei, Taiwan|http://www.microarch.org/micro49/"
	,"ASPLOS\'17|08/08/2016|08/15/2016|11/17/2016|Apr 08-12, 2017|Xi'an, China|http://www.ece.cmu.edu/calcm/asplos2016/"
	,"HPCA\'17|07/25/2016|08/01/2016|10/12/2016|Feb 04-08, 2017|Austin, US|http://hpca2017.org"
	,"DATE\'17|09/08/2016|09/13/2016|11/07/2016|Mar 27-31, 2017|Lausanne, Switzerland|http://www.date-conference.com"
	,"ISPASS\'16|10/02/2015|10/09/2015|01/22/2016|Apr 17-19, 2016|Uppsala, Sweden|http://www.ispass.org/ispass2016/"
	,"SIGMETRICS\'16|11/23/2015|11/30/2015|02/20/2016|Jun 14-18, 2016|Antibes, France|http://sigmetrics.org/sigmetrics2016/"
	,"ISCA\'16|11/16/2015|11/23/2015|03/09/2016|Jun 18-22, 2016|Seoul, Korea|http://isca2016.eecs.umich.edu"
	,"DAC\'16|11/17/2015|11/24/2015|02/16/2016|Jun 05-09, 2016|Austin, US|https://dac.com"
	,"ICDCS\'16|12/11/2015|12/18/2015|03/21/2016|Jun 27-30, 2016|Nara, Japan|http://www-higashi.ist.osaka-u.ac.jp/icdcs2016/"
	//,"CGO\'15|09/05/2014|09/12/2014|11/03/2014|Feb 07-11, 2015|San Francisco, US|http://cgo.org/cgo2015/"
	//,"PPoPP\'15|09/05/2014|09/12/2014|11/10/2014|Feb 09-11, 2015|San Francisco, US|https://ppopp15.soe.ucsc.edu"
	,"HiPEAC\'17|06/01/2016|06/01/2016|11/15/2016|Jan 23-25, 2017|Stockholm, Sweden|https://www.hipeac.org/2017/stockholm/"
	,"IPDPS\'16|10/09/2015|10/16/2015|12/18/2015|May 23-27, 2016|Chicago, US|http://www.ipdps.org"
	,"ASPDAC\'17|07/08/2016|07/08/2016|09/12/2016|Jan 16-19, 2017|Tokyo, Japan|http://www.aspdac.com/aspdac2017/cfp/"
	,"DSN\'16|11/27/2015|12/07/2015|02/29/2016|Jun 28-Jul 1, 2016|Toulouse, France|http://www.dsn.org"
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
