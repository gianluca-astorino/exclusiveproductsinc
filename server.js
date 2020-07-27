const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');



//DB Config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.log(err));

const app = express()
app.set('view engine', 'ejs')

//Body Parser


app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use('/public/css/img', express.static('./public/css/img'));

const PORT = process.env.PORT || 1995;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log('listening on port ', PORT)
});

//Landing Pages

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/index', (req, res) => {
    res.render('index.ejs')
});

app.get('/home', (req, res) => {
    res.render('index.ejs')
});

app.get('/done', (req, res) => {
    res.render('done.ejs')
});


//login page

app.get('/login', (req,res) => {
    res.render('login.ejs')
})

app.post('/login', (req,res) => {

})

//register page (only active when needed)

app.get('/register', (req,res) => {
    console.log(req.body)
    res.render('register.ejs')
})

app.post('/register', (req,res) => {
    const { name, email, password, password2 } = req.body;
let errors = [];

//check required fields
if (!name || !email || !password || !password2) {
    errors.push({ msg: 'please fill in all fields' })
}

//check passwords match

if (password !== password2) {
    errors.push({ msg: 'Passwords do not match'})
}

if (errors.legnth > 0) {
    res.render('register', {
        errors,
        name,
        email,
        password,
        password2
    });

} else{
    res.send('pass')
}

//check password legnth
// if (password.legnth < 6 ){
//     errors.push({ msg: 'passwords need at least 6 characters '})
// }

});

//CATALOUGE PAGES
app.get('/catalouge', (req, res) => {
    res.render('catalouge.ejs')
});

app.get('/catalouge2', (req, res) => {
    res.render('catalouge2.ejs')
});
app.get('/catalouge3', (req, res) => {
    res.render('catalouge3.ejs')
});
app.get('/catalouge4', (req, res) => {
    res.render('catalouge4.ejs')
});
app.get('/catalouge5', (req, res) => {
    res.render('catalouge5.ejs')
});

//FILTER SELECTION PAGES
app.get('/carcleaningproducts', (req, res) => {
    res.render('car-cleaning-products.ejs')
})

app.get('/janitorialsupplies', (req, res) => {
    res.render('janitorial-supplies.ejs')
})

app.get('/powerwashequipment', (req, res) => {
    res.render('powerwashequipment.ejs')
})

app.get('/paperproducts', (req, res) => {
    res.render('paper-products.ejs')
})

app.get('/ppe', (req, res) => {
    res.render('ppe.ejs')
})

app.get('/winterproducts', (req, res) => {
    res.render('winter-products.ejs')
})

app.get('/vacuumproducts', (req, res) => {
    res.render('vacuum-products.ejs')
})

app.get('/compressorandaccessories', (req, res) => {
    res.render('compressor-and-accessories.ejs')
})



//START OF ALL PRODUCT PAGES


app.get('/all-purpose-foaming-cleaner', (req, res) => {
    res.render('all-purpose-foaming-cleaner.ejs')
})

app.get('/washnwax', (req, res) => {
    res.render('wash-n-wax.ejs')
})

app.get('/citrus-degreaser', (req, res) => {
    res.render('citrus-degreaser.ejs')
})

app.get('/nitrile-gloves', (req, res) => {
    res.render('nitrile-gloves.ejs')
})

app.get('/18FloorSqueege', (req, res) => {
    res.render('18FloorSqueege.ejs')
})

app.get('/18PushBroom', (req, res) => {
    res.render('18PushBroom.ejs')
})

app.get('/22x24garbagebags', (req, res) => {
    res.render('22x24garbagebags.ejs')
})

app.get('/2milGarbageBags', (req, res) => {
    res.render('2milGarbageBags.ejs')
})

app.get('/50waterhose', (req, res) => {
    res.render('50waterhose.ejs')
})

app.get('/aircompressor', (req, res) => {
    res.render('aircompressor.ejs')
})

app.get('/alcholpad', (req, res) => {
    res.render('alcholpad.ejs')
})

app.get('/all-purpose-lubricant', (req, res) => {
    res.render('all-purpose-lubricant.ejs')
})

app.get('/auto-squeege', (req, res) => {
    res.render('auto-squeege.ejs')
})

app.get('/bug-off', (req, res) => {
    res.render('bug-off.ejs')
})

app.get('/bulk-fabric-bandages', (req, res) => {
    res.render('bulk-fabric-bandages.ejs')
})

app.get('/car-wash-soap', (req, res) => {
    res.render('car-wash-soap.ejs')
})

app.get('/car-wash-with-wax-LOWpH', (req, res) => {
    res.render('car-wash-with-wax-LOWpH.ejs')
})

app.get('/carpet-stain-remover', (req, res) => {
    res.render('carpet-stain-remover.ejs')
})

app.get('/centerpull-6Pack', (req, res) => {
    res.render('centerpull-6Pack.ejs')
})

app.get('/coco-nut-deodorizor', (req, res) => {
    res.render('coco-nut-deodorizor.ejs')
})

app.get('/contactless-thermometer', (req, res) => {
    res.render('contactless-thermometer.ejs')
})

app.get('/compressor', (req, res) => {
    res.render('compressor.ejs')
})

app.get('/corn-broom', (req, res) => {
    res.render('corn-broom.ejs')
})

app.get('/dash-dressing', (req, res) => {
    res.render('dash-dressing.ejs')
})

app.get('/dial-soap-dispenser', (req, res) => {
    res.render('dial-soap-dispenser.ejs')
})

app.get('/empty-eye-wash-bottle', (req, res) => {
    res.render('empty-eye-wash-bottle.ejs')
})

app.get('/eye-wash', (req, res) => {
    res.render('eye-wash.ejs')
})

app.get('/face-sheild', (req, res) => {
    res.render('face-sheild.ejs')
})

app.get('/facial-tissues', (req, res) => {
    res.render('facial-tissues.ejs')
})

app.get("/first-aid-kit", (req, res) => {
    res.render('first-aid-kit.ejs')
})

app.get("/first-aid-refill-kit", (req, res) => {
    res.render('first-aid-refill-kit.ejs')
})

app.get("/garbage-bin", (req, res) => {
    res.render('garbage-bin.ejs')
})

app.get("/garbage-dolly", (req, res) => {
    res.render('garbage-dolly.ejs')
})

app.get("/germs-be-gone", (req, res) => {
    res.render('germs-be-gone.ejs')
})

app.get("/glass-cleaner", (req, res) => {
    res.render('glass-cleaner.ejs')
})

app.get("/glass-marker", (req, res) => {
    res.render('glass-marker.ejs')
})

app.get("/gojo-foam-hand-wash", (req, res) => {
    res.render('gojo-foam-hand-wash.ejs')
})

app.get("/gojo-touchless-dispencer", (req, res) => {
    res.render('gojo-touchless-dispencer.ejs')
})

app.get("/hand-soap", (req, res) => {
    res.render('hand-soap.ejs')
})

app.get("/jumbo-toilet-paper", (req, res) => {
    res.render('jumbo-toilet-paper.ejs')
})

app.get("/hazmat-suit", (req, res) => {
    res.render('hazmat-suit.ejs')
})

app.get("/hoop-scoop-dust-pan", (req, res) => {
    res.render('hoop-scoop-dust-pan.ejs')
})

app.get("/hydrogen-peroxide", (req, res) => {
    res.render('hydrogen-peroxide.ejs')
})

app.get("/interior-clean", (req, res) => {
    res.render('interior-clean.ejs')
})

app.get("/jumbo-toilet-tissue-dispencer", (req, res) => {
    res.render('jumbo-toilet-tissue-dispencer.ejs')
})

app.get("/kitchen-towels", (req, res) => {
    res.render('kitchen-towels.ejs')
})

app.get("/liquid-swarm", (req, res) => {
    res.render('liquid-swarm.ejs')
})

app.get("/lysol-wipes", (req, res) => {
    res.render('lysol-wipes.ejs')
})

app.get("/metal-tipped-handle", (req, res) => {
    res.render('metal-tipped-handle.ejs')
})

app.get("/microfibre-cloths", (req, res) => {
    res.render('microfibre-cloths.ejs')
})

app.get("/microfibre-mop-head", (req, res) => {
    res.render('microfibre-mop-head.ejs')
})

app.get("/mop-handle", (req, res) => {
    res.render('mop-handle.ejs')
})

app.get("/mop-bucket-ringer", (req, res) => {
    res.render('mop-bucket-ringer.ejs')
})

app.get("/multi-fold-paper", (req, res) => {
    res.render('multi-fold-paper.ejs')
})

app.get("/face-masks", (req, res) => {
    res.render('face-masks.ejs')
})

app.get("/non-silicone-tire-shine", (req, res) => {
    res.render('non-silicone-tire-shine.ejs')
})

app.get("/paper-cup", (req, res) => {
    res.render('paper-cup.ejs')
})

app.get("/PDQ", (req, res) => {
    res.render('PDQ.ejs')
})

app.get("/pet-hair-remover", (req, res) => {
    res.render('pet-hair-remover.ejs')
})

app.get("/PREempt-wipes", (req, res) => {
    res.render('PREempt-wipes.ejs')
})

app.get("/purell", (req, res) => {
    res.render('purell.ejs')
})

app.get("/purell-LTX", (req, res) => {
    res.render('purell-ltx.ejs')
})

app.get("/Rags", (req, res) => {
    res.render('Rags.ejs')
})

app.get("/razor-blade-holder", (req, res) => {
    res.render('razor-blade-holder.ejs')
})

app.get("/razor-blades", (req, res) => {
    res.render('razor-blades.ejs')
})

app.get("/reusable-face-mask", (req, res) => {
    res.render('reusable-face-masks.ejs')
})

app.get("/rim-brush", (req, res) => {
    res.render('rim-brush.ejs')
})

app.get("/rim-cleaner", (req, res) => {
    res.render('rim-cleaner.ejs')
})

app.get("/saftey-glasses", (req, res) => {
    res.render('saftey-glasses.ejs')
})

app.get("/saftey-goggles", (req, res) => {
    res.render('saftey-goggles.ejs')
})

app.get("/saftey-vest", (req, res) => {
    res.render('saftey-vest.ejs')
})

app.get("/salt-be-gone", (req, res) => {
    res.render('salt-be-gone.ejs')
})

app.get("/salvequick-bandage-dispencer", (req, res) => {
    res.render('salvequick-bandage-dispencer.ejs')
})

app.get("/salvequick-fabric-bandages", (req, res) => {
    res.render('salvequick-fabric-bandages.ejs')
})

app.get("/salvequick-plastic-bandages", (req, res) => {
    res.render('salvequick-plastic-bandages.ejs')
})

app.get("/smoke-eliminator-deodorizor", (req, res) => {
    res.render('smoke-eliminator-deodorizor.ejs')
})

app.get("/snow-brush", (req, res) => {
    res.render('snow-brush.ejs')
})

app.get("/spray-trigger", (req, res) => {
    res.render('spray-trigger.ejs')
})

app.get("/step-and-go-mop-handle", (req, res) => {
    res.render('step-and-go-mop-handle.ejs')
})

app.get("/swivel-vacuum-cuff", (req, res) => {
    res.render('swivel-vacuum-cuff.ejs')
})

app.get("/tapered-wooden-handle", (req, res) => {
    res.render('tapered-wooden-handle.ejs')
})

app.get("/toilet-paper", (req, res) => {
    res.render('toilet-paper.ejs')
})

app.get("/tork-jumbo-cleaning-cloth", (req, res) => {
    res.render('tork-jumbo-cleaning-cloth.ejs')
})

app.get("/vacuum-crevice", (req, res) => {
    res.render('vacuum-crevice.ejs')
})

app.get("/vacuum-hose", (req, res) => {
    res.render('vacuum-hose.ejs')
})

app.get("/vacuum-motor-foam-gasket", (req, res) => {
    res.render('vacuum-motor-foam-gasket.ejs')
})

app.get("/vacuum-motor", (req, res) => {
    res.render('vacuum-motor.ejs')
})

app.get("/vacuum-nozzle", (req, res) => {
    res.render('vacuum-nozzle.ejs')
})

app.get("/vacuum-vibration-gasket", (req, res) => {
    res.render('vacuum-vibration-gasket.ejs')
})

app.get("/vacuum", (req, res) => {
    res.render('vacuum.ejs')
})

app.get("/vanilla-deodorizor", (req, res) => {
    res.render('vanilla-deodorizor.ejs')
})

app.get("/vehicle-wash-brush", (req, res) => {
    res.render('vehicle-wash-brushs.ejs')
})

app.get("/waste-basket", (req, res) => {
    res.render('waste-basket.ejs')
})

app.get("/water-nozzle", (req, res) => {
    res.render('water-nozzle.ejs')
})

app.get("/windex", (req, res) => {
    res.render('windex.ejs')
})

app.get("/windsheild-washer-fluid", (req, res) => {
    res.render('windsheild-washer-fluid.ejs')
})

app.get("/wypall", (req, res) => {
    res.render('wypall.ejs')
})

app.get("/complete-pressure-washer-gun", (req, res) => {
    res.render('complete-pressure-washer-gun.ejs')
})


//END OF ALL PRODUCT PAGES


//START OF SENDING OUT EMAIL FUNCTION 

app.get("/order", (req, res) => {
    res.render('order.ejs')
  });
  
  //order page with sending email function
  app.post("/order", (req, res) => {
      
      "use strict";
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail', 
          auth: {
                  user: process.env.GMAIL_EMAIL,
                  pass: process.env.GMAIL_PASS
              }
    });
  
    var to_addr = req.body.user_email + ", solutionspier@gmail.com"
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'NO_REPLY@EXCLUSIVEPRODUCTS.COM', // sender address
      to: to_addr, // list of receivers
      subject: "Order for " + req.body.user_company, // Subject line
      text: "Thank you " + req.body.user_name + " for ordering with Exclusive Products! \n\nThe Information you entered is as follows:\n\n Company: " + req.body.user_company + "\n\n Location: " + req.body.user_location + "\n\n PO Number: " + req.body.user_ponumber + "\n\n Products Ordered: " + req.body.user_productstoorder + "\n\n Your order is being processes and you will recieve more information shortly! \n\n Sincerly, \n Exclusive Products" // plain text body
    });
    let info1 = await transporter.sendMail({
        from: 'NO_REPLY@EXCLUSIVEPRODUCTS.COM', // sender address
        to: 'bestsoccergoalsinsta@gmail.com', // list of receivers
        subject: "Order for " + req.body.user_company, // Subject line
        text: req.body.user_name + " from " + req.body.user_company + " has placed an order and has entered the following information:\n\n name: " + req.body.user_name +  "Location: " + req.body.user_location + "\n\n PO Number: " + req.body.user_ponumber + "\n\n Products Ordered: " + req.body.user_productstoorder, // plain text body
      });
  
  
    console.log("Message sent: %s", info1.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info1));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
  //render the form submission page (as of rn, always goes to this page even if email doesn't send)
      res.render('done')
  })



  //CONTACT PAGE EMAIL
  app.get("/contact", (req, res) => {
    res.render('contact.ejs')
  });
  
  //order page with sending email function
  app.post("/contact", (req, res) => {
      
      "use strict";
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail', 
          auth: {
                  user: process.env.GMAIL_EMAIL,
                  pass: process.env.GMAIL_PASS
              }
    });
  
    var to_addr = req.body.user_email + ", solutionspier@gmail.com"
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'NO_REPLY@EXCLUSIVEPRODUCTS.COM', // sender address
      to: to_addr, // list of receivers
      subject: req.body.user_subject, // Subject line
      text: "Thank you " + req.body.user_name + " for contacting Exclusive Products! \n\nThe Information you entered is as follows:\n\n" + req.body.user_text + "\n\n We have recieved your email and will be in contact with you shortly! \n\n Sincerly, \n Exclusive Products" // plain text body
    });
    let info1 = await transporter.sendMail({
        from: 'NO_REPLY@EXCLUSIVEPRODUCTS.COM', // sender address
        to: 'bestsoccergoalsinsta@gmail.com', // list of receivers
        subject: req.body.user_subject, // Subject line
        text: req.body.user_name + " from " + req.body.user_company + " has placed an order and has entered the following information:\n\n name: " + req.body.user_name +  "Location: " + req.body.user_location + "\n\n PO Number: " + req.body.user_ponumber + "\n\n Products Ordered: " + req.body.user_productstoorder, // plain text body
      });
  
  
    console.log("Message sent: %s", info1.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info1));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
  //render the form submission page (as of rn, always goes to this page even if email doesn't send)
      res.render('contact-landing')
  })
  
  