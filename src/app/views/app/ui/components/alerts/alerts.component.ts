import { Component, AfterViewInit } from '@angular/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html'
})
export class AlertsComponent implements  AfterViewInit {

  constructor(private notifications: NotificationsService, private translate: TranslateService) { }



  ngAfterViewInit(): void{
    this.notifications.success(
      this.translate.instant('alert.success-alert'),
      this.translate.instant('alert.success-alert-text'),
      {
        timeOut: 30000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false
      }
    );
  }

  onPrimary(): void{
    this.notifications.create(this.translate.instant('alert.primary'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Bare, { theClass: 'primary', timeOut: 3000, showProgressBar: true });
  }

  onSecondary(): void {
    this.notifications.create(this.translate.instant('alert.secondary'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Bare, { theClass: 'secondary', timeOut: 3000, showProgressBar: true });
  }

  onInfo(): void  {
    this.notifications.create(this.translate.instant('alert.info'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Info, { timeOut: 3000, showProgressBar: true });
  }

  onWarning(): void  {
    this.notifications.create(this.translate.instant('alert.warning'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Warn, { timeOut: 3000, showProgressBar: true });
  }

  onError(): void  {
    this.notifications.create(this.translate.instant('alert.error'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Error, { timeOut: 3000, showProgressBar: true });
  }

  onSuccess(): void  {
    this.notifications.create(this.translate.instant('alert.success'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Success, { timeOut: 3000, showProgressBar: true });
  }


  onPrimaryOutline(): void  {
    this.notifications.create(this.translate.instant('alert.primary'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Bare, { theClass: 'outline primary', timeOut: 3000, showProgressBar: false });
  }

  onSecondaryOutline(): void  {
    this.notifications.create(this.translate.instant('alert.secondary'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Bare, { theClass: 'outline secondary', timeOut: 3000, showProgressBar: false });
  }

  onInfoOutline(): void  {
    this.notifications.create(this.translate.instant('alert.info'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Info, { theClass: 'outline', timeOut: 3000, showProgressBar: false });
  }

  onWarningOutline(): void  {
    this.notifications.create(this.translate.instant('alert.warning'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Warn, { theClass: 'outline', timeOut: 3000, showProgressBar: false });
  }

  onErrorOutline(): void  {
    this.notifications.create(this.translate.instant('alert.error'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Error, { theClass: 'outline', timeOut: 3000, showProgressBar: false });
  }

  onSuccessOutline(): void {
    this.notifications.create(this.translate.instant('alert.success'),
      this.translate.instant('alert.notification-content'),
      NotificationType.Success, { theClass: 'outline', timeOut: 3000, showProgressBar: false });
  }
}
