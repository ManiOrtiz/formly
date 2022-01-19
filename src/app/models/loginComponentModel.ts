import { FormlyFieldConfig } from '@ngx-formly/core';

export class LoginModel {
    model = {
        email: '',
        password: ''
    };
    form = [
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                placeholder: 'Correo/Telefono',
                required: true,
            }
        },
        {
            key: 'password',
            type: 'input',
            templateOptions: {
                type: 'password',
                placeholder: 'Contraseña',
                required: true,
            }
        },

    ];
}
export class RegisterModel {
    model = {
        email: '',
        //emailConfirm: '',
        phone: '',
        //phoneConfirm: '',
        password: '',
        //passwordConfirm: '',
        smsCheck: false,
        whatsappCheck: false,
        emailCheck: false,
        privacyCheck: false
    };
    form = [
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                placeholder: 'Correo',
                required: true,
                attributes: {
                    onpaste: 'return false;',
                  },
            }
        },
        {
            key: 'emailConfirm',
            type: 'input',
            templateOptions: {
                placeholder: 'Confirma tu correo',
                required: true,
                attributes: {
                    onpaste: 'return false;',
                  },
            },
            validators: {
                repeatPhone: {
                    expression: (control) => {
                        return control.value === this.model.email
                    },
                    message: 'Los correos no coinciden',
                },
                
            }
        },
        {
            key: 'phone',
            type: 'input',
            templateOptions: {
                placeholder: 'Teléfono',
                required: true,
                maxLength: 10,
                attributes: {
                    onpaste: 'return false;',
                  },
            },
            validators: {
                CellPhone: {
                    expression: (control) => /\d{10}/.test(control.value),
                    message: 'Deben ser 10 dígitos',
                  }
            }
        },
        {
            key: 'phoneConfirm',
            type: 'input',
            templateOptions: {
                placeholder: 'Confirma tu teléfono',
                required: true,
                maxLength: 10,
                attributes: {
                    onpaste: 'return false;',
                    autocomplete: 'new-phone'
                  },
            },
            validators: {
                repeatPhone: {
                    expression: (control) => {
                        return control.value === this.model.phone
                    },
                    message: 'Los teléfonos no coinciden',
                },
                CellPhone: {
                    expression: (control) => /\d{10}/.test(control.value),
                    message: 'Deben ser 10 dígitos',
                  }
            }
        },
        {
            key: 'password',
            type: 'input',
            templateOptions: {
                type: 'password',
                placeholder: 'Contraseña',
                required: true,
                attributes: {
                    onpaste: 'return false;',
                  },
            }
        },
        {
            key: 'passwordConfirm',
            type: 'input',
            templateOptions: {
                type: 'password',
                placeholder: 'Confirma tu contraseña',
                required: true,
                attributes: {
                    onpaste: 'return false;',   
                  },
            },
            validators: {
                repeatPassword: {
                    expression: (control) => {
                        return control.value === this.model.password
                    },
                    message: 'Las contraseñas no coinciden',
                },
            }
        },
       
    ];
}



  