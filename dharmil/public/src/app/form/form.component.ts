import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';
import { FormSubmissionService } from '../form-submission.service';
import { Form } from '../interfaces/Form';
import { CheckClassService } from '../check-class.service';
// import { flex-layout } from '@angular/flex-lay';
export interface CityGroup {
  disabled?: boolean;
  name: string;
  city: City[];
}
export interface City {
  value: string;
  viewValue: string;
}

export interface Class {
  value: string;
  viewValue: string;
}

export interface ClassGroup {
  disabled?: boolean;
  name: string;
  class: Class[];
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  form: Form;
  // FormGroup ============================
  translexForm = new FormGroup({
    /*
      Category of Mark
    */
    categoryOfMark: new FormControl(''),
    wordMark : new FormControl({ value: '', disabled: true },
    Validators.compose(
      [Validators.pattern('^[A-Za-z][\-\_\.\s]*$'), Validators.required])
    ),
    deviceMark : new FormControl({ value: '' , disabled: true },
    Validators.compose(
      [Validators.pattern('^[A-Za-z][\-\_\.\s]*$'), Validators.required])
    ),
    /*
      Type of Class
    */
   class: new FormControl('',
      Validators.required
    ),



    name: new FormControl('',
    Validators.compose(
      [Validators.pattern('^[A-Za-z][\s]*$'), Validators.required])
    ),
    typeOfTrademark: new FormControl('',
      Validators.required
    ),
    cityOfRegistration: new FormControl('',
      Validators.required
    ),
    tradeMarkNumber: new FormControl({value: '', disabled: true }),


    typeOfRegistration: new FormControl('',
      Validators.required
    ),
    services: new FormControl('',
      Validators.required
    ),
    nameOfEntity: new FormControl('',
    Validators.compose(
      [Validators.pattern('^[A-Za-z][\-\_\.\s]*$'), Validators.required])
    ),
    registeringEntity: new FormControl('',
    Validators.compose(
      [Validators.pattern('^[A-Za-z][\-\_\.\s]*$'), Validators.required])
    ),
    addresses: this.fb.array([this.addressForm()]),
    phoneNumber : new FormControl('',
      [Validators.pattern('^[0-9]{0,10}$')]
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

// variables ================================
disabled: string;
// Classes ================================
classGroups: ClassGroup[] = [
  {
    name: 'Product',
    class: [
      { value: 'Class-1', viewValue: 'Chemicals' },
      { value: 'Class-2', viewValue: 'Paints, Coatings & Pigments' },
      { value: 'Class-3', viewValue: 'Cleaning Products, Bleaching & Abrasives, Cosmetics' },
      { value: 'Class-4', viewValue: 'Fuels, Industrial Oils and Greases, Illuminates' },
      { value: 'Class-5', viewValue: 'Pharmaceutical, Veterinary Products, Dietetic' },
      { value: 'Class-6', viewValue: 'Metals, metal castings, Locks, Safes, Hardware' },
      { value: 'Class-7', viewValue: 'Machines and Machine Tools, Parts' },
      { value: 'Class-8', viewValue: 'Hand Tools and implements, Cutlery' },
      { value: 'Class-9', viewValue: 'Computers, Software, Electronic instruments, & Scientific appliances' },
      { value: 'Class-10', viewValue: 'Medical, Dental Instruments and Apparatus' },
      { value: 'Class-11', viewValue: 'Appliances, Lighting, Heating, Sanitary Installations' },
      { value: 'Class-12', viewValue: 'Vehicles' },
      { value: 'Class-13', viewValue: 'Firearms, Explosives and Projectiles' },
      { value: 'Class-14', viewValue: 'Precious Metal ware, Jewellery' },
      { value: 'Class-15', viewValue: 'Musical Instruments and supplies' },
      { value: 'Class-16', viewValue: 'Paper, Items made of Paper, Stationary items' },
      { value: 'Class-17', viewValue: 'Rubber, Asbestos, Plastic Items' },
      { value: 'Class-18', viewValue: 'Leather and Substitute Goods' },
      { value: 'Class-19', viewValue: 'Construction Materials (building – non metallic)' },
      { value: 'Class-20', viewValue: 'Furniture, Mirrors' },
      { value: 'Class-21', viewValue: 'Crockery, Containers, Utensils, Brushes, Cleaning Implements' },
      { value: 'Class-22', viewValue: 'Cordage, Ropes, Nets, Awnings, Sacks, Padding' },
      { value: 'Class-23', viewValue: 'Yarns, Threads' },
      { value: 'Class-24', viewValue: 'Fabrics, Blankets, Covers, Textile' },
      { value: 'Class-25', viewValue: 'Clothing, Footwear and Headgear' },
      { value: 'Class-26', viewValue: 'Sewing Notions, Fancy Goods, Lace and Embroidery' },
      { value: 'Class-27', viewValue: 'Carpets, Linoleum, Wall and Floor Coverings (non textile)' },
      { value: 'Class-28', viewValue: 'Games, Toys, Sports Equipment' },
      { value: 'Class-29', viewValue: 'Foods – Dairy, Meat, Fish, Processed & Preserved Foods' },
      { value: 'Class-30', viewValue: 'Foods – Spices, Bakery Goods, Ice, Confectionery' },
      { value: 'Class-31', viewValue: 'Fresh Fruit & Vegetables, Live Animals' },
      { value: 'Class-32', viewValue: 'Beer, Ales, Soft Drinks, Carbonated Waters' },
      { value: 'Class-33', viewValue: 'Wines, Spirits, Liqueurs' },
      { value: 'Class-34', viewValue: 'Tobacco, Smokers Requisites & Matches' }
   ],
  },
  {
    name: 'Services',
    class: [
      { value: 'Class-35', viewValue: 'Advertising, Business Consulting' },
      { value: 'Class-36', viewValue: 'Insurance, Financial' },
      { value: 'Class-37', viewValue: 'Construction, Repair, Cleaning' },
      { value: 'Class-38', viewValue: 'Communications' },
      { value: 'Class-39', viewValue: 'Transport, Utilities, Storage & Warehousing' },
      { value: 'Class-40', viewValue: 'Materials Treatment, Working' },
      { value: 'Class-41', viewValue: 'Education, Amusement, Entertainment, Reproduction' },
      { value: 'Class-42', viewValue: 'Scientific and technological services and research and design relating thereto' },
      { value: 'Class-43', viewValue: 'Services for providing food and drink; temporary accommodations' },
      { value: 'Class-44', viewValue: 'Medical services; veterinary services; hygienic and beauty care for human beings or animals' },
      { value: 'Class-45', viewValue: 'Personal and social services rendered by others to meet the needs of individuals' }
    ]
  }
];
// Cities from where they want to file their Trademaarks
  cityGroup: CityGroup[] = [
    {
      name: 'Mumbai',
      city: [
        { value: 'maharashtra', viewValue: 'Maharashtra' },
        { value: 'madhyaPradesh', viewValue: 'Madhya Pradesh' },
        { value: 'chhattisgarh', viewValue: 'Chattisgarh' },
        { value: 'goa', viewValue: 'Goa' }
      ]
    }
  ];
// Type Of Registration ============================================================
  typeOfRegistration = [
    // tslint:disable-next-line:max-line-length
    'Personal', 'Sole Proprietorship', 'Start-ups/Small Enterprises' , 'Partnership', 'Limited Liability Company', 'Single Person Company', 'Private Ltd' , 'Public Ltd' , 'Trust' , 'Hindu Undivided Family', 'others'
  ];
// Services ========================================= ===============================
  services = [
    {
      value : 'normal',
      pricing : 1,
      days : '15 - 20',
      viewName : 'Normal'
    } ,
    {
      value : 'urgent',
      pricing : 1.25,
      days : '5 - 10',
      viewName : 'Urgent'
    }
  ];
  finalPrice: number;

// Constructor =====================================================================
  constructor(
    private fs: FormSubmissionService,
    private fb: FormBuilder,
    private cc: CheckClassService 
    ) { }
  ngOnInit() {
    this.finalPrice = 420000;
    this.disabled = 'disabled';
    console.log(this.translexForm.get('addresses'));
   }


// Custom Fuctions =================================================================

  updateMark() {
    const catOfMark = this.translexForm.get('categoryOfMark').value; // categoryOfMark
    // tslint:disable-next-line:no-unused-expression
    if (catOfMark === 'deviceMark'){
      this.translexForm.get('wordMark').disable();
      this.translexForm.get('deviceMark').enable();
    } else {
      this.translexForm.get('wordMark').enable();
      this.translexForm.get('deviceMark').disable();
    }
  }

  update() {
    console.log(this.translexForm);
    if (this.translexForm.status === 'INVALID') { console.log( 'Inside If' ); return 0; }
    this.fs.submit(this.translexForm.value).subscribe(
      translex => {
        console.log(translex);
      }
    );
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
    const address = this.translexForm.get('addresses') as FormArray;
    console.log(address);
    if ( address.length === 2) {
      return 0;
    }
    address.push( this.addressForm());
  }

  removeAddress( i ) {
    const address = this.translexForm.get( 'addresses' ) as FormArray;
    if ( address.length === 0) {
      return 0;
    }
    address.removeAt(i);
  }
  // Pricing
  pricing() {
    try {
      let pricing;
      const regType = this.translexForm.get('typeOfRegistration').value; // type of registration
      const classPricing = this.translexForm.get('class').value.length;
      const serviceValue = this.translexForm.get('services').value;
      const servicePricing = this.services.filter(( servicesObj ) => servicesObj.value === serviceValue )[0].pricing;
      const regPricing = ((regType === this.typeOfRegistration[0]) || (regType === this.typeOfRegistration[1])) ? 8000 : 15000;
      pricing  = regPricing * classPricing * servicePricing;
      console.log( pricing );
      this.finalPrice = pricing;
    } catch (err) {
      return 0;
    }
  }

  updateAttr() {
    console.log( );
    if ( this.translexForm.get('typeOfTrademark').value === 'renewal') {
      this.translexForm.get('tradeMarkNumber').enable();
    } else {
      this.translexForm.get('tradeMarkNumber').disable();
    }
    return 0;
  }
  checkAvailable() {
    const checkVal = {}
    checkVal['wordmark'] = this.translexForm.get('wordMark').value;
    const x = this.translexForm.get('class').value;
    console.log(x[0]);
    checkVal['class_no'] = x[0].match(/\d+/g)[0];
    console.log(checkVal);
    this.cc.check(checkVal).subscribe(
      value => {
        console.log(value);
      }
    );
  }
  compareEntity() {
    console.log(this.translexForm.value );
    const regType = this.translexForm.get('typeOfRegistration').value; // type of registration
    const entityName = this.translexForm.get('nameOfEntity').value; // name of Entity
    const registName = this.translexForm.get('registeringEntity').value; // registering Entity
    // tslint:disable-next-line:max-line-length
    if ((regType === this.typeOfRegistration[0]) || (regType === this.typeOfRegistration[1])) {
      if ( entityName !== registName ) {
        console.log( `Do you want to Register in ${this.translexForm.get('name').value} or ${registName} ? ` );
      }
      return 0;
    } else {
      console.log('Providing an authority letter? or register in the name of the company');
    }
  }
}
