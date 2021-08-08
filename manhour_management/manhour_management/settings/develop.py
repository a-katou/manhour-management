from .default import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'manhour_db',
        'USER': 'appuser01',
        'PASSWORD': 'appuser01',
        'HOST': '192.168.56.11',
        'PORT': '3306',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}
