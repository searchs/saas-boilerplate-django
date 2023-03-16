import { FormattedMessage } from 'react-intl';

import { AvatarForm } from '../../shared/components/auth/avatarForm';
import { ChangePasswordForm } from '../../shared/components/auth/changePasswordForm';
import { EditProfileForm } from '../../shared/components/auth/editProfileForm';
import { TwoFactorAuthForm } from '../../shared/components/auth/twoFactorAuthForm';
import { useAuth } from '../../shared/hooks';
import { Container, EmailLabel, FormHeader, Header, HeaderInfo, RolesLabel } from './profile.styles';

export const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <Container>
      <Header>
        <FormattedMessage defaultMessage="User profile" id="Auth / Profile details / Header" />
      </Header>

      <HeaderInfo>
        <AvatarForm />

        <EmailLabel>
          <FormattedMessage
            defaultMessage="Email: {email}"
            id="Auth / Profile details / Email label"
            values={{ email: currentUser?.email }}
          />
        </EmailLabel>

        <RolesLabel>
          <FormattedMessage
            defaultMessage="Roles: {roles}"
            id="Auth / Profile details / Roles label"
            values={{ roles: currentUser?.roles?.join(',') }}
          />
        </RolesLabel>
      </HeaderInfo>

      <FormHeader>
        <FormattedMessage defaultMessage="Personal data" id="Auth / Profile details / Personal data header" />
      </FormHeader>
      <EditProfileForm />

      <FormHeader>
        <FormattedMessage defaultMessage="Change password" id="Auth / Profile details / Change password header" />
      </FormHeader>
      <ChangePasswordForm />

      <FormHeader>
        <FormattedMessage
          defaultMessage="Two-factor Authentication"
          id="Auth / Profile details / Two-factor Authentication header"
        />
      </FormHeader>
      <TwoFactorAuthForm isEnabled={currentUser?.otpEnabled} />
    </Container>
  );
};
