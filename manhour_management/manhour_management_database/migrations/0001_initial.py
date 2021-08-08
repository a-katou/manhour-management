# Generated by Django 3.2.6 on 2021-08-08 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user_id', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=64)),
                ('mail', models.CharField(max_length=256)),
                ('role_id', models.IntegerField()),
                ('comp_id', models.IntegerField()),
                ('dept_id', models.IntegerField(null=True)),
                ('create_date', models.DateTimeField()),
                ('create_user', models.CharField(max_length=256)),
                ('update_date', models.DateTimeField()),
                ('update_user', models.CharField(max_length=256)),
                ('delete_flg', models.CharField(max_length=1)),
            ],
        ),
    ]
