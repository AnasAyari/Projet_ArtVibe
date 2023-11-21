import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordStrnthPipe'
})
export class PasswordStrnthPipePipe implements PipeTransform {

  transform(password: string): string {
    if (!password) {
      return '';
    }

    const strength = this.calculatePasswordStrength(password);

    if (strength < 3) {
      return 'Your Password is Weak';
    } else if (strength < 6) {
      return 'Your Password is Moderate';
    } else {
      return 'Your Password is Strong';
    }
  }

  private calculatePasswordStrength(password: string): number {
    return password.length;
  }
}
