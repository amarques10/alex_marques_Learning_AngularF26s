import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { EditPermission } from './services/edit-permission';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const editPermission = inject(EditPermission);

  const canEdit = editPermission.guardEnabled();

  return canEdit ? true : router.createUrlTree(['/meals']);
}
