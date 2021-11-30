import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocaleProductsModel, Product, User } from 'src/models';
import { AccountService, LocaleDataService, ProductService } from 'src/services';
import { BookingService } from 'src/services/booking.service';
import { ZOWEH } from 'src/shared/constants';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {
  @Input() categoryListing: LocaleProductsModel;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = true;

  msaapPlaylist: Track[] = [];

  products: Product[];
  user: User;
  modalHeading = 'Add product';
  showModal: boolean;
  showAddCustomer: boolean;
  allProducts: Product[];
  categories: any[];
  note = `The callout fee is R50.00 and is only available if you are in Empangeni.`;
  howto = `bring and collect your chothes at the following address.`;
  cat = 'Hip hop';
  heading = '';
  products2: Product[];
  cat2: string = 'Nature';
  product: Product;
  constructor(
    private productService: ProductService,
    private accountService: AccountService,
    private bookingService: BookingService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.accountService.currentUserValue;
    this.productService.productListObservable.subscribe(data => {
      this.allProducts = data;
      this.products = this.allProducts.filter(x => x.ParentCategoryName === 'Hip hop');
     this.msaapPlaylist = this.products.map(data=>{
        return {
          title: data.Name,
          link: data.Code
        };
      });

      this.products2 = this.allProducts.filter(x => x.ParentCategoryName === this.cat2);
      this.heading = `Top Hip hop`
      // this.categories = this.products.map(x => {
      //   return {
      //     CategoryName: x.CategoryName,
      //     Class: []
      //   };
      // });

      if (this.categories && this.categories.length) {
        this.selectCategory(0);
      }
    });
    this.productService.getProducts('all');
  }
  onEnded($event) { }
  view(product: Product) {
    this.product = null;
    this.product = product;
    if (this.bookingService.currentBookingValue) {
      if (this.bookingService.currentBookingValue.BookingItems.find(x => x.ServiceId === product.ProductId)) {
        alert(`product already booked`);
        return false;
      }
      this.productService.updateProductState(product);
      // this.router.navigate(['book', product.ProductSlug]);
    } else {
      this.bookingService.updateBookingState({
        BookingId: '',
        UserId: '',
        BookingDate: undefined,
        StartTime: undefined,
        FinishTime: undefined,
        TimeId: undefined,
        Place: 'Zoweh office',
        TotalAmount: 0,
        Status: 'Up coming',
        CreateUserId: '',
        ModifyUserId: '',
        StatusId: 1,
        BookingItems: []
      });
      this.productService.updateProductState(product);
      // this.router.navigate(['book', product.ProductSlug]);
    }

  }

  selectCategory(index) {

    const tempCategories = [];
    this.categories.forEach((category, index) => {
      console.log(`${category.CategoryName} ${index}`);
      if (category.CategoryName && !tempCategories.find(x => x.CategoryName === category.CategoryName)) {
        tempCategories.push(category);
      }
    });

    this.categories = tempCategories;

    this.categories.map(x => x.Class = []);
    this.categories[index].Class.push('active');
    this.products = this.allProducts.filter(x => x.CategoryName === this.categories[index].CategoryName);
  }
  closeModal() {
    this.showModal = false;
    this.showAddCustomer = false;
  }

  tab(cat: string) {
    this.heading = `Top ${cat} experiences`

    this.cat = cat;
    this.products = this.allProducts.filter(x => x.ParentCategoryName === cat);
  }

  viewAll(category: string) {
    if (category) {
      // this.homeShopService.updateCategoryState(category);
      // this.router.navigate(['collections', category.Name.toLocaleLowerCase()]);
    }
  }

}
