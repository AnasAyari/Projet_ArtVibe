import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordStrnthPipe'
})
export class PasswordStrnthPipePipe implements PipeTransform {

  transform(password: string): string {
    if (!password) {
      return 'Weak';
    }

    const strength = this.calculatePasswordStrength(password);

    if (strength < 3) {
      return 'Weak';
    } else if (strength < 6) {
      return 'Moderate';
    } else {
      return 'Strong';
    }
  }

  private calculatePasswordStrength(password: string): number {
    return password.length;
  }
}
