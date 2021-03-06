# ----------------------------------------------------------------------------
# This file is part of "Curuba Mobile".
#
# "Curuba Mobile" is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# "Curuba Mobile" is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with "Curuba Mobile".  If not, see <http://www.gnu.org/licenses/>.
# ----------------------------------------------------------------------------
# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', 'themes')



# Compass configurations
sass_path    = dir
css_path     = File.join(dir, "..", "css")
environment  = :production
output_style = :compressed
