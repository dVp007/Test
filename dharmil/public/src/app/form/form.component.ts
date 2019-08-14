import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // FormGroup ============================
  translexForm = new FormGroup({
    name: new FormControl('Het'),
    TOT : new FormControl('trade1'),
    wordMark : new FormControl('trade1'),
    class: new FormControl('class1'),
    typeOfRegistrtion: new FormControl('private'),
    nameOfEntity: new FormControl('Het-pvt'),
    phoneNumber : new FormControl('9321269168'),
    email: new FormControl('dharmilp03@gmail.com', [
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
  typeOfRegistrtion = [
    'propreitorship', 'personal', 'LLP', 'SinglePerson', 'Private Ltd' , 'public Ltd' , 'trust' , 'others'
  ];
// Services
  services = ['Urgent' , 'Normal' , 'Relaxed' ];
  constructor(private enrollmentService: EnrollmentService) { }
  ngOnInit() { }
  update() {
    this.enrollmentService.enroll(this.translexForm.value).subscribe(
      translex => {
        console.log(translex);
      }
    );
  }
}
