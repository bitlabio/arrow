// bitlab webserver v1.0
// https://nodejs.org/en/docs/es6/
// nodemon --harmony server.js 

var client = { name: "rich architects", git: "https://github.com/bitlabio/richarchitects", mongodb: "richarch", mongocollections: ['projects']}
console.log(client)


//temp db.

var projects = []

projects.push({id: 1, name:"Mapungubwe", thumbimage:"thumb_001.jpg", slug:"mapungubwe",
  location: "Mapungubwe, Limpopo",
  locationlink: "https://www.google.co.za/maps/place/Mapungubwe+National+Park/@-22.2549689,29.2004356,11.25z/data=!4m5!3m4!1s0x1ec85aad3cb687c5:0xd3683a8ce5bb0717!8m2!3d-22.222048!4d29.3472691",
  date: "March ‎2011",
  team: ["Peter Rich"],
  description: "",  
  content:[
    {type:"wideimg", file:"mapungubwe_1.jpg"}, 
    {type:"wideimg", file:"mapungubwe_2.jpg"}, 
    {type:"wideimg", file:"mapungubwe_3.jpg"}, 
    {type:"wideimg", file:"mapungubwe_4.jpg"}, 
    {type:"wideimg", file:"mapungubwe_5.jpg"}, 
    {type:"wideimg", file:"mapungubwe_6.jpg"}, 
    {type:"wideimg", file:"mapungubwe_7.jpg"}, 
  ]
})

projects.push({id: 2, name:"Alexandra Heritage Centre", thumbimage:"thumb_002.jpg", slug:"alexandra",
  location: "Alexandra Township, Johannesburg",
  locationlink: "https://www.google.co.za/maps/place/Alexandra+Township/@-26.0944769,28.0891017,14.5z/data=!4m5!3m4!1s0x1e9572b7ee44d5a9:0x3cb1fd4f5acb74f5!8m2!3d-26.09221!4d28.08983",
  date: "‎April ‎2005",
  team: ["Peter Rich"],
  description: "",  
  content:[
    {type:"wideimg", file:"alexandra_1.jpg"}, 
    {type:"wideimg", file:"alexandra_2.jpg"}, 
    {type:"wideimg", file:"alexandra_3.jpg"}, 
    {type:"wideimg", file:"alexandra_4.jpg"}, 
    {type:"wideimg", file:"alexandra_5.jpg"}, 
    {type:"wideimg", file:"alexandra_6.jpg"}, 
    {type:"wideimg", file:"alexandra_7.jpg"}, 
  ]
})

projects.push({id: 3, name:"House Kennedy", thumbimage:"thumb_003.jpg", slug:"kennedy",
  location: "Ballot Heights, George, Western Cape",
  locationlink: "https://www.google.co.za/maps/place/George/@-33.9833545,22.4303161,13z/data=!3m1!4b1!4m5!3m4!1s0x1dd61ad1d896f1bf:0x17b84f9af7d3beb3!8m2!3d-33.9881281!4d22.4529878",
  date: "February ‎2011",
  team: ["Peter Rich"],
  description: "",  
  content:[
    {type:"wideimg", file:"kennedy_1.jpg"}, 
    {type:"wideimg", file:"kennedy_2.jpg"}, 
    {type:"wideimg", file:"kennedy_3.jpg"}, 
    {type:"wideimg", file:"kennedy_4.jpg"}, 
    {type:"wideimg", file:"kennedy_5.jpg"}, 
    {type:"wideimg", file:"kennedy_6.jpg"}, 
    {type:"wideimg", file:"kennedy_7.jpg"}, 
    {type:"wideimg", file:"kennedy_8.jpg"}, 
    {type:"wideimg", file:"kennedy_9.jpg"}, 
    {type:"wideimg", file:"kennedy_10.jpg"}, 
    {type:"wideimg", file:"kennedy_11.jpg"}, 
    {type:"wideimg", file:"kennedy_12.jpg"}, 
    {type:"wideimg", file:"kennedy_13.jpg"}, 
    {type:"wideimg", file:"kennedy_14.jpg"}, 
    {type:"wideimg", file:"kennedy_15.jpg"}, 
    {type:"wideimg", file:"kennedy_16.jpg"}, 
  ]
})

projects.push({id: 4, name:"FR-2 Office", thumbimage:"thumb_004.jpg", slug:"fr2",
  location: "Chicago, USA",
  locationlink: "https://www.google.co.za/maps/place/Chicago,+IL,+USA/@41.833648,-87.8722375,11z/data=!3m1!4b1!4m5!3m4!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!8m2!3d41.8781136!4d-87.6297982",
  date: "‎June ‎2014",
  team: ["Peter Rich"],
  description: "",  
  content:[
    {type:"wideimg", file:"fr2_1.jpg"}, 
  ]
})

projects.push({id: 5, name:"Aksum", thumbimage:"thumb_005.jpg", slug:"aksum",
  location: "Aksum, Ethiopia",
  locationlink: "https://www.google.co.za/maps/place/Aksum,+Ethiopia/@14.1325364,38.7290809,14z/data=!3m1!4b1!4m5!3m4!1s0x166bfcbea0c26cfb:0x74d0dc83a015ace1!8m2!3d14.1340317!4d38.7472905",
  date: "June 2016",
  team: ["Peter Rich"],
  description: "",  
  content:[
    {type:"wideimg", file:"aksum_1.jpg"}, 
    {type:"wideimg", file:"aksum_2.jpg"}, 
    {type:"wideimg", file:"aksum_3.jpg"}, 
    {type:"wideimg", file:"aksum_4.jpg"}, 
    {type:"wideimg", file:"aksum_5.jpg"}, 
  ]
})

projects.push({id: 6, name:"Kigali City", thumbimage:"thumb_006.jpg", slug:"kigali",
  location: "Kigali City, Rwanda",
  locationlink: "https://www.google.co.za/maps/place/Mountain+View,+Johannesburg,+2192/@-26.1686375,28.0729517,15z/data=!3m1!4b1!4m5!3m4!1s0x1e950db88045ef97:0x480bfe7b073b5633!8m2!3d-26.168458!4d28.0808098",
  date: "June 2016",
  team: ["Peter Rich"],
  description: "",  
  content:[
    {type:"wideimg", file:"kigali_1.jpg"}, 
    {type:"wideimg", file:"kigali_2.jpg"}, 
    {type:"wideimg", file:"kigali_3.jpg"}, 
    {type:"wideimg", file:"kigali_4.jpg"}, 
    {type:"wideimg", file:"kigali_5.jpg"}, 
    {type:"wideimg", file:"kigali_6.jpg"}, 
    {type:"wideimg", file:"kigali_7.jpg"}, 
    {type:"wideimg", file:"kigali_8.jpg"}, 
    {type:"wideimg", file:"kigali_9.jpg"}, 
    {type:"wideimg", file:"kigali_10.jpg"}, 
    {type:"wideimg", file:"kigali_11.jpg"}, 
    
  ]
})

projects.push({id: 7, name:"Sam Nzima Museum", thumbimage:"thumb_007.jpg", slug:"museum",
  location: "Hazyview, Mpumalanga",
  locationlink: "https://www.google.co.za/maps/place/Mountain+View,+Johannesburg,+2192/@-26.1686375,28.0729517,15z/data=!3m1!4b1!4m5!3m4!1s0x1e950db88045ef97:0x480bfe7b073b5633!8m2!3d-26.168458!4d28.0808098",
  date: "February ‎2013",
  team: ["Peter Rich"],
  description: "",  
  content:[
    {type:"wideimg", file:"museum_1.jpg"}, 
    {type:"wideimg", file:"museum_2.jpg"}, 
  ]
})

projects.push({id: 8, name:"Braamfontein Lofts", thumbimage:"thumb_008.jpg", slug:"braamfontein",
  location: "West of Braamfontein, Johannesburg",
  locationlink: "https://www.google.co.za/maps/place/Braamfontein+Werf,+Johannesburg,+2092/@-26.1874149,28.0144962,17z/data=!3m1!4b1!4m5!3m4!1s0x1e950bf5c665b6fd:0xdb6f36bc8c1c537a!8m2!3d-26.1867342!4d28.0182428",
  date: "2015 - 2017",
  team: ["Shawn Labuschagne", "Robert Rich", "Ann Chang", "Thabo Mahlaka", "Sebastian Waters"],
  description: "3.4 hectares of old industrial buildings are converted into middle class loft apartments. This development is intended to breathe new life and regenerate this part of the city. A leased strip of green belt forms the natural retreat from the existing industrial environment.",  
  content:[
    {type:"wideimg", file:"braamfontein_1.jpg"},
    {type:"wideimg", file:"braamfontein_3.jpg"}, 
    {type:"wideimg", file:"braamfontein_9.jpg"}, 
    {type:"wideimgthree", files: ["braamfontein_4.jpg", "braamfontein_5.jpg", "braamfontein_7.jpg"]}, 
    {type:"wideimg", file:"braamfontein_6.jpg"},
    {type:"wideimgtwo", files: ["braamfontein_2.jpg", "braamfontein_8.jpg"]},
  ]
})

projects.push({id: 9, name:"Homestead Apartments", thumbimage:"thumb_009.jpg", slug:"homestead",
  location: "Edenburg, Rivonia, Johannesburg",
  locationlink: "https://www.google.co.za/maps/place/Mountain+View,+Johannesburg,+2192/@-26.1686375,28.0729517,15z/data=!3m1!4b1!4m5!3m4!1s0x1e950db88045ef97:0x480bfe7b073b5633!8m2!3d-26.168458!4d28.0808098",
  date: "September 2015",
  team: ["Peter Rich", "Robert Rich", "Rogan Rich", "Michael Brown", "Andre Meyer", "Blue Benington"],
  description: "A 6 storey 95-unit upmarket apartment block with roof amenities that include a coffee bar, an infinity pool, a mini golf course, braai facilities and a children’s playground.",  
  content:[
    {type:"wideimg", file:"homestead_2.jpg"}, 
    {type:"wideimg", file:"homestead_3.jpg"}, 
    {type:"wideimg", file:"homestead_4.jpg"}, 
    {type:"wideimg", file:"homestead_5.jpg"}, 
    {type:"wideimg", file:"homestead_1.jpg"}, 
  ]
})

projects.push({id: 10, name:"Hayat Recreational Centre", thumbimage:"thumb_010.jpg", slug:"hayat",
  location: "Addis Ababa, Ethiopia",
  locationlink: "https://www.google.co.za/maps/place/Addis+Ababa,+Ethiopia/@8.9631505,38.6380607,11z/data=!3m1!4b1!4m5!3m4!1s0x164b85cef5ab402d:0x8467b6b037a24d49!8m2!3d8.9806034!4d38.7577605?hl=en",
  date: "August 2013",
  team: ["Peter Rich", "Rogan Rich", "Shawn Labuschagne", "Quinton Clarke"],
  description: "The Hayat Recreation Centre is a mixed-use retail, commercial and residential precinct in Addis Ababa, Ethiopia that explores our signature vaulted roof in a multi-level structure and gives the building an iconic look.",  
  content:[
    {type:"wideimg", file:"hayat_1.jpg"}, 
    {type:"wideimgthree", files: ["hayat_2.jpg", "hayat_3.jpg", "hayat_4.jpg"]}, 
    {type:"wideimgtwo", files: ["hayat_5p6.jpg", "hayat_anim.gif"]}, 
  ]
})

projects.push({id: 11, name:"Wu Shan Retreat", thumbimage:"thumb_011.jpg", slug:"greenstone",
  location: "Anji, Zhejiang Province, People’s Republic of China.",
  locationlink: "https://www.google.co.za/maps/place/Anji,+Huzhou,+Zhejiang,+China/@30.6190621,119.0046885,9z/data=!3m1!4b1!4m5!3m4!1s0x344b237c9cbf02c1:0x43253d6668b0f907!8m2!3d30.638675!4d119.680353?hl=en",
  date: "July 2016",
  team: ["Peter Rich", "Rogan Rich", "Joanne Kridiotis", "Blue Benington", "Lloyd Bussio"],
  description: "Wu Shan means Misty Mountain in Mandarin. A 200-unit boutique nature retreat, located three hours from Shanghai and one hour from Hangzhou in a beautiful fruit tree and flower-growing valley surrounded by bamboo forests. No cars are allowed on the 10 000m2 property with visitor’s parking off the main road. Golf carts bring visitors in over stone paved bridges and roads past the earth-vaulted reception restaurant building and on to their stone clad mountain bungalow. The design includes a variety of holiday house typologies ranging from honeymoon suites, family units to units for the elderly. An authentic nature experience!",  
  content:[
    {type:"wideimg", file:"greenstone_1.jpg"}, 
    {type:"wideimg", file:"greenstone_2.jpg"}, 
    {type:"wideimgthree", files: ["greenstone_3.jpg", "greenstone_4.jpg", "greenstone_5.jpg"]}, 
  ]
})

projects.push({id: 12, name:"Geralta Lodge", thumbimage:"thumb_012.jpg", slug:"geralta", 
  location: "Geralta, Northern Ethiopia",
  locationlink: "https://www.google.co.za/maps/place/Gheralta+Lodge/@13.9706612,39.4214988,17z/data=!3m1!4b1!4m5!3m4!1s0x166b7098802079c3:0xae6d8c959506cfd9!8m2!3d13.970656!4d39.4236928",
  date: "July 2012",
  team: ["Peter Rich", "Michael Ramage", "Rogan Rich", "Shawn Labuschagne", "Rouan van der Ende", "Riyahd Cassiem"],
  description: "Geralta Lodge is something completely unique! It is a boutique lodge in Northern Ethiopia that uses the sustainable technology of light earth tiles to create timbrel vaulted structures that are clad with local stone to camouflage the chalets in the dramatic landscape.",

  content:[
    {type:"wideimg", file:"geralta_4.jpg"}, 
    {type:"wideimg", file:"geralta_5.jpg"}, 
    {type:"wideimgtwo", files: ["geralta_7.jpg", "geralta_6.jpg"]}, 
    {type:"wideimgthree", files: ["geralta_1.jpg", "geralta_2.jpg", "geralta_3.jpg"]}, 
  ]
})

projects.push({id: 13, name:"Marula Lodge Pool Pavilion", thumbimage:"thumb_013.jpg", slug:"marula",
  location: "25km SE of Windhoek, Namibia",
  locationlink: "https://www.google.co.za/maps/place/Namibia/@-22.6930922,9.5032826,5z/data=!3m1!4b1!4m5!3m4!1s0x1bf53c7e6ed37521:0xd3b9e5a5a8ecb261!8m2!3d-22.95764!4d18.49041",
  date: "2015",
  team: ["Rogan Rich","Shawn Labuschagne", "Kate Hall"],
  description: "We were employed by the landscape architects Green Inc to design a pool pavilion that would terminate at the end of a cascading water feature. The architecture is influenced by the landscape architecture, Kolmanskop and the framing of natural amenities. The elevated building forms the shadow for a pool pavilion.",  
  content:[
    {type:"wideimg", file:"marula_4.jpg"}, 
    {type:"wideimg", file:"marula_5.jpg"}, 
    {type:"wideimg", file:"marula_2.jpg"}, 
    {type:"wideimg", file:"marula_3.jpg"}, 
    {type:"wideimg", file:"marula_1.jpg"}, 
  ]
})

projects.push({id: 14, name:"House Vercamer", thumbimage:"thumb_014.jpg", slug:"vercamer",
  location: "Mountain View, Johannesburg",
  locationlink: "https://www.google.co.za/maps/place/Mountain+View,+Johannesburg,+2192/@-26.1686375,28.0729517,15z/data=!3m1!4b1!4m5!3m4!1s0x1e950db88045ef97:0x480bfe7b073b5633!8m2!3d-26.168458!4d28.0808098",
  date: "December 2013",
  team: ["Robert Rich", "Rogan Rich",  "Shawn Labuschagne"],
  description: "A compact lock up and go bachelor pad for a New York based client who spends a couple of months a year in Johannesburg. The ‘floating apartment’ makes use of light weight steel construction with a cantilevered north facing deck with expansive views, that is supported underneath by the existing separately rentable cottage.",  
  content:[
    {type:"wideimg", file:"vercamer_1.jpg"}, 
    {type:"wideimg", file:"vercamer_2.jpg"}, 
  ]
})
//projects.push({id: 15, name:"Batsinda", thumbimage:"thumb_015.jpg", slug:"batsinda"})
//projects.push({id: 16, name:"Cactus Green Park", thumbimage:"thumb_016.jpg", slug:"cactus"})
//projects.push({id: 17, name:"Kimichanga", thumbimage:"thumb_017.jpg", slug:"kimichanga"})



var imagemagickOn = true;
if (process.platform == "win32") {  imagemagickOn = false; }

if (imagemagickOn == true) {
  var im = require('imagemagick');
}




var enableEmail = true;
var mailbot = require('./email')
mailbot.debug = true; 




var express = require('express');
var app = express();
var path    = require("path");
var bodyParser = require('body-parser');
var fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var mongojs = require('mongojs')
var db = mongojs(client.mongodb,client.mongocollections)

var cookieParser = require('cookie-parser')
var session = require('cookie-session')

app.use(bodyParser.json());

app.use(session({
  name: 'session',
  keys: ['bnhgjyutj', 'nuhioiu8poyrt'],
  secureProxy: false // if you do SSL outside of node
}))


app.get('/dbload', (req,res) => {
	dbload();
	res.end('success')
})

function dbload() {
  db.projects.drop();
  for (var p in projects) {
    console.log("loading project "+p)
    db.projects.save(projects[p], function (err, res) { console.log("success")})
  }
}

dbload();

app.use('/', express.static('public')); //index.html default

app.get('/', (req,res) => {
  if (req.session.hash) {
    console.log("LOGGED IN")
    console.log(req.session.hash);
    res.sendFile(path.join(__dirname+'/public/index.html'));
  } else {
    console.log("anon")
    res.sendFile(path.join(__dirname+'/public/index.html'));
  }
  
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/contact.html'));  
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/about.html'));  
})

app.get('/:slug', (req, res, next) => {
  console.log("debug. req.params.")
  console.log(req.params)


  db.projects.find( (err, projects) => {  

	  var found = false;
	  for (var p in projects) { if (projects[p].slug == req.params.slug) { found = true; } }

	  if (found) { 
	  		console.log('success!')
	  		res.sendFile(path.join(__dirname+'/public/project.html'));  
		} else {
			next();
		}

  }) 




  //res.sendFile(path.join(__dirname+'/public/viewprop.html'));
})


app.get('/api/findall', (req, res) => { 
	console.log("findall.")
	db.projects.find( (err, result) => {  res.json(result) }) }
)

app.post('/api/findone', (req, res) => {
  console.log(">>")
  var slug = req.body.path.split('/').pop()
  console.log("slug:"+slug)

  db.projects.findOne({"slug":slug}, (err, project) => {
    console.log(project);
    res.json(project);
  })
})


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/login.html'));  
})

app.get('/logout', (req, res) => {
  delete req.session.hash;
  res.redirect('/');
})

app.get('/submit', (req, res) => {
  if (req.session.hash == lastlogin) {
    res.sendFile(path.join(__dirname+'/public/submit.html'));  
  } else {
    res.redirect("/login")
  }  
  
})

app.post('/api/create', (req, res) => {
  if (req.session.hash == lastlogin) {
  	req.body.timestamp = Date.now();

  	var newproject = {}
  	newproject.name = req.body.name;
  	newproject.slug = req.body.url;
  	newproject.id = -1;

  	db.projects.find( (err, result) => {  
  		
  		var highestid = -1;
  		for (var p in result) { if (result[p].id > highestid) { highestid = result[p].id; }}
  		newproject.id = highestid + 1;
  		db.projects.save(newproject, function (err, result) {
			console.log(result)
			console.log(req.body)
			res.json(result);		
		} );
  	}) 
	
  } else {
  	res.end('error')
  }
  
})

// API

// ENCRYPTION
var scrypt = require("./scrypt.js"); // modified https://github.com/tonyg/js-scrypt

var lasthash = ""; //last generated (could be malicious)
var lastlogin = ""; //last successful (retain!)

app.get('/api/delete', (req,res) => {
  if (req.session.hash == lastlogin) {
    var url = req.get('Referrer')
    var pid = parseInt(url.split('/').pop())
    db.properties.remove({"pid":pid}, (err, result) => {
      res.json(result)
    })
  } else {
    console.log("ERROR DELETE")
  }
})

app.get('/api/taken', (req,res) => {
  if (req.session.hash == lastlogin) {
    var url = req.get('Referrer')
    var pid = parseInt(url.split('/').pop())
    db.properties.findOne({"pid":pid}, (err, result) => {
      if (result.taken == true) {
        result.taken = false;
        db.properties.update({"pid":pid}, result, (err, updated) => {
          console.log(updated)
          res.json(updated)
        });
      } else {
        result.taken = true;
        db.properties.update({"pid":pid}, result, (err, updated) => {
          console.log(updated)
          res.json(updated)
        });        
      }

    })
  } else {
    console.log("ERROR TAKEN/TOGGLE")
  }
})

app.post('/api/login', (req, res) => {
  console.log(req.body)
  if (req.body.request == "salt") { 
    var newsalt = Math.round(Math.random()*10000000000000000).toString(); console.log("salt:"+newsalt)
    var encryptedhex = scrypt.to_hex(scrypt.crypto_scrypt(scrypt.encode_utf8("password"), scrypt.encode_utf8(newsalt), 16384, 8, 1, 32)); 
    lasthash = encryptedhex; console.log("expected:"+encryptedhex);
    res.end( newsalt ); 
  }
  if (req.body.request == "login") { 
    if (req.body.hash == lasthash) {
      console.log("SUCCESSFUL")
      lastlogin = lasthash;

      req.session.hash = lastlogin;
      req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge;

      res.end("success")

    } else {
      res.end("error")
    }
  }
  //res.end("hello")
})

app.get('/api/checklogin', (req, res) => {
  if (req.session.hash == lastlogin) {
    res.json({"login":"success"})
  } else {
    res.json({"login":"fail"})
  }
})

app.get('/api/search', (req, res) => { db.properties.find( (err, result) => {  res.json(result) }) })

app.get('/api/findone', (req, res) => {
  console.log("/api/findone")
  console.log(req.body)
  var url = req.get('Referrer')
  var pid = parseInt(url.split('/').pop())
  console.log("pid:"+pid)
  db.properties.findOne({"pid":pid}, (err, property) => {
    console.log(property);
    res.json(property);
  })
})


app.post('/api/contact', (req, res) => {
  console.log("New contact message:")
  req.body.timestamp = Date.now();
  console.log(req.body)



            //start email
            if (enableEmail) 
            {
              var email = {}
            email.from = "noreply@moproperty.com";
            email.fromname = "noreply@moproperty.com";
            email.rcpt = "markleootto@gmail.com";
            email.rcptname = "Mark Otto";
            /*email.rcpt = "rouan@8bo.org";
            email.rcptname = "Rouan van der Ende";*/            
            email.subject = "new moproperty contact form message";
            email.body = "New message from moproperty contact form:\n\n" + "email: " + req.body.email + "\nphone: "+ req.body.phone + "\nmessage: " + req.body.message + "\n";

            mailbot.sendemail(email, function (data) 
            {
              console.log("EMAIL SENT")
                //db.properties.save(req.body);
              res.json(req.body.timestamp);              
            })
          } 
          // end email

})



var cpUpload = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/fileupload', cpUpload,  (req, res) => {
  console.log(req.files)
  var url = req.get('Referrer')
  var pid = url.split('/').pop()

  //UPLOAD/DB MAIN IMAGE
  fs.rename(req.files.file[0].path, "public/content/"+pid+".jpg", function() {
    db.properties.findOne({"pid":parseInt(pid)}, (err, dbprop) => {
      console.log(dbprop)
      dbprop.mainimg = pid+".jpg"
      
      db.properties.update({"pid":parseInt(pid)}, dbprop, (err, result) => {


        //RESIZE
        if (imagemagickOn == true) {
          console.log("resizing using imagemagick")
          var imgfilepath = "public/content/"+pid+".jpg"

          var command = [imgfilepath, '-strip', '-interlace', 'Plane', '-quality','80','-resize','1280x960', imgfilepath]

          im.convert(command, 
            function(err, stdout){
              if (err) throw err;
              console.log('stdout:', stdout);
              console.log("updated and resized!")
              res.end("test");              
            });
        } else {
          console.log("updated!")
          res.end("test");
        }
        //ENDRESIZE



      });
      

    })
  })










  
})

app.use('/newgame' ,(req, res) => {
  var newGame = {}
  newGame.id = Math.round(Math.random()*100000)
  newGame.status = "created"

  gameData[newGame.id] = newGame;

  res.redirect('/game/'+newGame.id+"/");
  //res.sendFile(path.join(__dirname+'/public/newgame.html'));
})

app.use('/game/:id/:options' ,(req, res) => {

  console.log(gameData);
  console.log(req.params)
  gameData[req.params.id].status = "started";

  res.redirect('/game/'+req.params.id+"/");

})

app.use('/p/:id/' ,(req, res) => {
  console.log(req.params.id);
  res.sendFile(path.join(__dirname+'/public/viewprop.html'));  
})



app.listen(80, function () {
  console.log('Server listening...');
});






