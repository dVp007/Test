import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';
import { FormSubmissionService } from '../form-submission.service';
import { Form } from '../interfaces/Form';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: Form;
  // FormGroup ============================
  translexForm = new FormGroup({
    name: new FormControl('',
    Validators.compose(
      [Validators.pattern('^[A-Za-z]*$'), Validators.required])
    ),
    typeOfTrademark: new FormControl('',
      Validators.required
    ),
    wordMark : new FormControl('',
    Validators.compose(
      [Validators.pattern('^[A-Za-z]*$'), Validators.required])
    ),
    class: new FormControl('',
      Validators.required
    ),
    typeOfRegistration: new FormControl('',
      Validators.required
    ),
    services: new FormControl('',
      Validators.required
    ),
    nameOfEntity: new FormControl('',
    Validators.compose(
      [Validators.pattern('^[A-Za-z]*$'), Validators.required])
    ),
    registeringEntity: new FormControl('', ),
    addresses: this.fb.array([this.addressForm()]),
    phoneNumber : new FormControl('',
      [Validators.pattern('^[0-9]{0,10}$')]
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

// Classes ================================

 classes = [
'Chemicals',
'Paints, Coatings & Pigments',
'Cleaning Products, Bleaching & Abrasives, Cosmetics',
'Fuels, Industrial Oils and Greases, Illuminates',
'Pharmaceutical, Veterinary Products, Dietetic',
'Metals, metal castings, Locks, Safes, Hardware',
'Machines and Machine Tools, Parts',
'Hand Tools and implements, Cutlery',
'Computers, Software, Electronic instruments, & Scientific appliances',
'Medical, Dental Instruments and Apparatus',
'Appliances, Lighting, Heating, Sanitary Installations',
'Vehicles',
'Firearms, Explosives and Projectiles',
'Precious Metal ware, Jewellery',
'Musical Instruments and supplies',
'Paper, Items made of Paper, Stationary items',
'Rubber, Asbestos, Plastic Items',
'Leather and Substitute Goods',
'Construction Materials (building – non metallic)',
'Furniture, Mirrors',
'Crockery, Containers, Utensils, Brushes, Cleaning Implements',
'Cordage, Ropes, Nets, Awnings, Sacks, Padding',
'Yarns, Threads',
'Fabrics, Blankets, Covers, Textile',
'Clothing, Footwear and Headgear',
'Sewing Notions, Fancy Goods, Lace and Embroidery',
'Carpets, Linoleum, Wall and Floor Coverings (non textile)',
'Games, Toys, Sports Equipment',
'Foods – Dairy, Meat, Fish, Processed & Preserved Foods',
'Foods – Spices, Bakery Goods, Ice, Confectionery',
'Fresh Fruit & Vegetables, Live Animals',
'Beer, Ales, Soft Drinks, Carbonated Waters',
'Wines, Spirits, Liqueurs',
'Tobacco, Smokers Requisites & Matches',
'Advertising, Business Consulting',
'Insurance, Financial',
'Construction, Repair, Cleaning',
'Communications',
'Transport, Utilities, Storage & Warehousing',
'Materials Treatment, Working',
'Education, Amusement, Entertainment, Reproduction',
'Scientific and technological services and research and design relating thereto',
'Services for providing food and drink; temporary accommodations',
'Medical services; veterinary services; hygienic and beauty care for human beings or animals',
'Personal and social services rendered by others to meet the needs of individuals'];

// Type Of Registration ============================================================
  typeOfRegistration = [
    // tslint:disable-next-line:max-line-length
    'Personal', 'Sole Proprietorship', 'Partnership', 'Limited Liability Company', 'Single Person Company', 'Private Ltd' , 'Public Ltd' , 'Trust' , 'Hindu Undivided Family', 'others'
  ];
// Services ========================================= ===============================
  services = ['Urgent' , 'Normal' , 'Relaxed' ];

// Constructor =====================================================================
  constructor(
    private fs: FormSubmissionService,
    private fb: FormBuilder
    ) { }
  ngOnInit() {
    console.log(this.translexForm.get('addresses'));
   }
  ngDestroy() {
    alert('destroyed');
  }
  update() {
    console.log(this.translexForm);
    // this.fs.submit(this.form).subscribe(
    //   translex => {
    //     console.log(translex);
    //   }
    // );
  }

  addressForm(): FormGroup {
    return this.fb.group({
      city: new FormControl('',
      Validators.compose(
        [Validators.pattern('^[A-Za-z]*$'), Validators.required]
      )),
      state: new FormControl('',
      Validators.compose(
        [Validators.pattern('^[A-Za-z]*$'), Validators.required]
      )),
      pincode: new FormControl('',
      Validators.compose(
        [Validators.pattern('^[0-9]{0,6}$'), Validators.required]
      )),
    });
  }

  addAddress() {
    if ( this.translexForm.get('addresses').length === 2) {
      return 0;
    }
    this.translexForm.get('addresses').push( this.addressForm());
  }

  removeAddress(i) {
    if ( this.translexForm.get('addresses').length === 0) {
      return 0;
    }
    this.translexForm.get('addresses').removeAt(i);
  }

  compareEntity() {
    console.log(this.translexForm.value );
    // tslint:disable-next-line:max-line-length
    if ( (this.translexForm.get('typeOfRegistration').value === this.typeOfRegistration[0]) || this.translexForm.get('typeOfRegistration').value === this.typeOfRegistration[1]) { 
      return 0;
    } else if ((this.translexForm.get('nameOfEntity').value === this.translexForm.get('registeringEntity').value)) {
      console.log('Should we Change the type of entity to personal??')
    } else {
      console.log('Providing an authority letter? or register in the name of the company')
    }
    console.log(this.translexForm.get('nameOfEntity').value);
    console.log(this.translexForm.get('name').value);
  }
}
